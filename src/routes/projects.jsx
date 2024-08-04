import { genProjects } from "../data/Projects";
import ProjectCards from "../components/ProjectCards";

export async function projectsLoader() {
  try {
    const projects = await genProjects();
    return { projects };
  } catch (e) {
    console.error(e);
  }
}

export const ProjectsPage = () => <ProjectCards />;

export default ProjectsPage;
