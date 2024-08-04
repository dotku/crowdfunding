import { Outlet } from "react-router-dom";
import { genProjects } from "../data/Projects";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <h1>Crowdfunding</h1>
        <Outlet />
      </div>
    </>
  );
}

export async function rootLoader() {
  const projects = await genProjects();
  return { projects };
}
