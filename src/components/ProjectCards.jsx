import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";
import SpinnerScreen from "./design-system/SpinnerScreen";

export default function ProjectCards() {
  const { projects } = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <SpinnerScreen />;
  }

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
                <Link to={`/project/${p.id}`}>
                  <Button color="primary" variant="ghost">
                    More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        : null}
    </div>
  );
}
