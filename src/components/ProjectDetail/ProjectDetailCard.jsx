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
import cx from "classnames";
import projects from "../../data/Projects";
import { useMemo } from "react";

const StyledArticle = styled.div`
  p {
    margin-top: 0.5rem;
  }
`;

const getNextProjectId = (currentProject) => {
  let index = projects.findIndex((p) => p.id === currentProject.id);
  if (index < projects.length && projects[++index]) return projects[index].id;
};

const getPrevProjectId = (currentProject) => {
  let index = projects.findIndex((p) => p.id === currentProject.id);
  if (index > 0) return projects[--index].id;
};

export default function ProjectDetailCard({ project }) {
  const nextProjectId = useMemo(() => getNextProjectId(project), [project]);
  const prevProjectId = useMemo(() => getPrevProjectId(project), [project]);

  const { name, detail, image } = project;

  return (
    <Card className="mt-6">
      <Image
        alt="Woman listing to music"
        className={cx("object-cover !w-full rounded-none", image.className)}
        src={image.url}
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
        <div>
          {prevProjectId ? (
            <Link to={`/project/${prevProjectId}`}>
              <Button>Prev</Button>
            </Link>
          ) : null}
        </div>
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <div>
          {nextProjectId ? (
            <Link to={`/project/${nextProjectId}`}>
              <Button>Next</Button>
            </Link>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
