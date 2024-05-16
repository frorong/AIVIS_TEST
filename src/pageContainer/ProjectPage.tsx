"use client";

import { useGetProjectList } from "@/hooks";
import { useEffect } from "react";

const ProjectPage = () => {
  const { data: projectList } = useGetProjectList();

  useEffect(() => {
    console.log(projectList);
  }, [projectList]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-white">프로젝트</h2>
      </div>
    </div>
  );
};

export default ProjectPage;
