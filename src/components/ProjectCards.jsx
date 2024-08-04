import { useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";

export default function ProjectCards() {
  const { projects } = useLoaderData();

  console.log("Projects", projects);
  return (
    <div className="flex justify-between">
      {Array.isArray(projects) && projects.length
        ? projects.map((p) => (
            <Card key={p.id} className="w-[30%]">
              <CardHeader>
                <h3 className="text-large font-bold">{p.name}</h3>
              </CardHeader>
              <Divider />
              <CardBody>{p.discription}</CardBody>
              <Divider />
              <CardFooter className="justify-end">
                <a href={`/project/${p.id}`}>
                  <Button color="primary" variant="ghost">
                    More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))
        : null}
    </div>
  );
}
