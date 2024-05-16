"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard, PaginationController } from "@/components";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const { data: projectList } = useGetProjectList();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [perPageCount, setPerPageCount] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);

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
