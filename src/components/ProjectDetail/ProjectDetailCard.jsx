import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeRaw from "rehype-raw";

export default function ProjectDetailCard({ project }) {
  const { name, detail } = project;
  return (
    <Card>
      <CardHeader className="justify-between">
        <h2 className="text-lg font-bold">{name}</h2>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="p-5">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={detail} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="justify-end"></CardFooter>
    </Card>
  );
}
