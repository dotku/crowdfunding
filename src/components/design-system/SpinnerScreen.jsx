import { Spinner } from "@nextui-org/react";

export default function SpinnerScreen() {
  console.log("SpinnerScreen rendered");
  return (
    <div className="flex h-screen justify-center items-center">
      <Spinner />
    </div>
  );
}
