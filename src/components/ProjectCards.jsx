import Projects from "../data/Projects";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function ProjectCards() {
  console.log("Projects", Projects);
  return (
    <div className="flex justify-between">
      {Array.isArray(Projects) && Projects.length
        ? Projects.map((p) => (
            <Card key={p.id} className="w-[30%]">
              <CardHeader>{p.name}</CardHeader>
              <CardBody>{p.discription}</CardBody>
              <CardFooter>
                <a href={`/project/${p.id}`}>More</a>
              </CardFooter>
            </Card>
          ))
        : null}
    </div>
  );
}
