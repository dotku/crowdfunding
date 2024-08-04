import { Spinner } from "@nextui-org/react";

export default function SpinnerScreen() {
  console.log("SpinnerScreen rendered");
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner />
    </div>
  );
}
