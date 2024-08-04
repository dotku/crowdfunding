import { useLoaderData } from "react-router-dom";
import { genProject } from "../data/Projects";
import { Button, Divider, Input, Progress } from "@nextui-org/react";
import ProjectDetailCard from "../components/ProjectDetail/ProjectDetailCard";
import { useEffect, useState } from "react";

export async function projectLoader({ params }) {
  console.log("projectLoader called with params:", params);
  try {
    const project = await genProject(params.id);
    return { project };
  } catch (e) {
    console.error(e);
    throw new Response("Failed to load project data", { status: 500 });
  }
}

function ProjectDetailPage() {
  const { project } = useLoaderData();
  const [projectFundValue, setProjectFundValue] = useState(0);
  const [sponsorFundValue, setSponsorFundValue] = useState(500);

  useEffect(() => {
    if (!project) return;
    setProjectFundValue(project.currentFund);
  }, [project]);

  const handleFundButtonClick = () => {
    setProjectFundValue((f) => f + sponsorFundValue);
  };

  if (!project)
    return <div>Something is wrong, please come back again later</div>;

  return (
    <div className="mb-5">
      <div className="mb-5">
        <ProjectDetailCard project={project} />
      </div>
      <Progress
        aria-label="fund"
        label="Current Fund"
        value={projectFundValue}
        maxValue={project.targetFund}
        formatOptions={{ style: "currency", currency: "USD" }}
        showValueLabel={true}
      />
      <div className="flex w-full flex-wrap sm:flex-col md:flex-row md:flex-nowrap gap-4 my-3">
        <Input label="Name" placeholder="Joun Doe" />
        <Input
          label="Fund"
          placeholder={sponsorFundValue}
          onChange={(e) => setSponsorFundValue(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <Input label="Message" placeholder="the comment you wnat to leave" />
      </div>
      <div className="flex w-full flex-wrap sm:flex-col md:flex-row md:flex-nowrap gap-4 mb-3">
        <Input label="Card Number" placeholder="enter your card number" />
        <Input
          label="Experiation Date"
          placeholder="enter your card experiation date YYMM"
        />
        <Input label="CVV" placeholder="security code" />
      </div>
      <div>
        <Button color="primary" onClick={handleFundButtonClick}>
          Fund
        </Button>
      </div>
      <div className="text-left my-8">
        <div>
          <strong>John Doe</strong> sponsored $500 💸
        </div>
        <div>
          <strong className="text-gray-400">Anonymous</strong> sponsored $1,500
          💸
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
