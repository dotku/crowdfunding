import { useLoaderData } from "react-router-dom";
import { genProject } from "../data/Projects";
import { Button, Divider, Input } from "@nextui-org/react";
import ProjectDetailCard from "../components/ProjectDetail/ProjectDetailCard";

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

  return (
    <>
      <ProjectDetailCard project={project} />
      <div className="flex w-full flex-wrap sm:flex-col md:flex-row md:flex-nowrap gap-4 my-3">
        <Input label="Name" placeholder="Joun Doe" />
        <Input label="Fund" placeholder="5" required />
      </div>
      <div className="my-3">
        <Input label="Message" placeholder="the comment you wnat to leave" />
      </div>
      <div className="flex w-full flex-wrap sm:flex-col md:flex-row md:flex-nowrap gap-4 my-3">
        <Input label="Card Number" placeholder="enter your card number" />
        <Input
          label="Experiation Date"
          placeholder="enter your card experiation date YYMM"
        />
        <Input label="CVV" placeholder="security code" />
      </div>
      <div>
        <Button color="primary">Fund</Button>
      </div>
    </>
  );
}

export default ProjectDetailPage;
