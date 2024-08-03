import Projects from "../data/Projects";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function ProjectCards() {
  console.log("Projects", Projects);
  return Array.isArray(Projects) && Projects.length
    ? Projects.map((p) => (
        <Card key={p.id}>
          <CardHeader>{p.name}</CardHeader>
          <CardBody>{p.discription}</CardBody>
          <CardFooter>
            <a href={`/project/${p.id}`}>More</a>
          </CardFooter>
        </Card>
      ))
    : null;
}
