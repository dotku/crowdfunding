import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Spinner,
  Image,
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
            <Card key={p.id} className="md:w-[30%] sm:w-full">
              <Link to={`/project/${p.id}`}>
                <Image
                  alt="Woman listing to music"
                  className="object-cover !w-full rounded-none"
                  src={p.image}
                  width={500}
                />
              </Link>
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
