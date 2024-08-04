import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { genProject } from "../data/Projects";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export async function projectLoader({ params }) {
  console.log("projectLoader called with params:", params);
  try {
    const project = await genProject(params.id);
    return { project };
  } catch (e) {
    console.error(e);
    throw new Response("Failed to load project data", { status: 500 });
  }
}

function ProjectDetailPage() {
  const { project } = useLoaderData();

  if (!project)
    return <div>Something is wrong, please come back again later</div>;
  const { name, detail } = project;
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">{name}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="p-5">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={detail} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="justify-end">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectDetailPage;
