import { DetailPage } from "@/pageContainer";

import { redirect } from "next/navigation";

interface Params {
  params: {
    projectId: string;
  };
}

const ProjectDetail: React.FC<Params> = async ({ params: { projectId } }) => {
  if (isNaN(parseInt(projectId))) redirect("/");

  return <DetailPage projectId={projectId} />;
};

export default ProjectDetail;
