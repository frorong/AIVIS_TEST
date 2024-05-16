"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard, PaginationController } from "@/components";
import { ProjectType } from "@/types";

import { useEffect, useState } from "react";

interface Props {
  initialData: ProjectType;
  offset: number;
  max: number;
}

const ProjectPage: React.FC<Props> = ({ initialData, offset, max }) => {
  const { data: projectList } = useGetProjectList(initialData);

  const [currentPage, setCurrentPage] = useState<number>(offset / 10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentMax, setCurrentMax] = useState<number>(max);

  useEffect(() => {
    if (projectList) setTotalPages(projectList.totalPages);
  }, [projectList]);

  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-3xl font-semibold mb-4 text-gray-500">프로젝트</h2>
      <section>
        <PaginationController
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentMax={currentMax}
        />
      </section>
      <section>
        {projectList &&
          projectList.collection.map((collection) => (
            <ProjectCard key={collection.id} {...collection} />
          ))}
      </section>
    </div>
  );
};

export default ProjectPage;
