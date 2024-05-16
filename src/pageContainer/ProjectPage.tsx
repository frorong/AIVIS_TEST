"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard } from "@/components";

import { useEffect } from "react";

const ProjectPage = () => {
  const { data: projectList } = useGetProjectList();

  useEffect(() => {
    console.log(projectList);
  }, [projectList]);

  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-3xl font-semibold mb-4 text-gray-500">프로젝트</h2>
      {projectList &&
        projectList.collection.map((collection) => (
          <ProjectCard key={collection.id} {...collection} />
        ))}
    </div>
  );
};

export default ProjectPage;
