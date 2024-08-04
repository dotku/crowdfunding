import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";

const StyledArticle = styled.div`
  p {
    margin-top: 0.5rem;
  }
`;

export default function ProjectDetailCard({ project }) {
  const { name, detail, image } = project;
  return (
    <Card className="mt-6">
      <Image
        alt="Woman listing to music"
        className="object-cover !w-full rounded-none"
        src={image}
        width={1300}
        height={300}
      />
      <CardHeader className="flex-col">
        <h2 className="text-3xl font-bold">{name}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <StyledArticle className="p-5 max-w-5xl mx-auto">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={detail} />
        </StyledArticle>
      </CardBody>
      <Divider />
      <CardFooter className="justify-between">
        <Link to={`/project/${Number(project.id) - 1}`}>
          <Button>Prev</Button>
        </Link>
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to={`/project/${Number(project.id) + 1}`}>
          <Button>Next</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
