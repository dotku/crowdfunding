import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@nextui-org/react";
import SpinnerScreen from "./design-system/SpinnerScreen";

export default function ProjectCards() {
  const { projects } = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <SpinnerScreen />;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      {Array.isArray(projects) && projects.length
        ? projects.map((p) => (
            <Card key={p.id}>
              <Link to={`/project/${p.id}`}>
                <Image
                  alt="Woman listing to music"
                  className="object-cover !w-full rounded-none"
                  src={p.image}
                  height={240}
                />
              </Link>
              <CardHeader>
                <h3 className="text-large font-bold">{p.name}</h3>
              </CardHeader>
              <Divider />
              <CardBody>{p.description}</CardBody>
              <Divider />
              <CardFooter className="justify-between">
                <span className="text-xl">
                  {Intl.NumberFormat("us", {
                    style: "currency",
                    currency: "USD",
                  }).format(p.targetFund)}
                </span>
                <Link to={`/project/${p.id}`}>
                  <Button color="primary" variant="ghost">
                    Detail
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        : null}
    </div>
  );
}
