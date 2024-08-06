import { Link, Outlet } from "react-router-dom";
import { genProjects } from "../data/Projects";

export default function HomeLayout({ children }) {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Link to="/">
          <h1 className="inline-block text-4xl sm:text-5xl lg:text-6xl py-6">
            Crowdfunding
          </h1>
        </Link>
        {children}
      </div>
    </>
  );
}

export async function rootLoader() {
  const projects = await genProjects();
  return { projects };
}
