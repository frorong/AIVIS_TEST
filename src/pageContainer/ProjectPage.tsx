"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard, PaginationController } from "@/components";
import { ProjectType } from "@/types";

import { useEffect, useState } from "react";
import { PROJECT_PAGE_PATH } from "@/constant";
import { useRouter } from "next/navigation";

interface Props {
  initialData: ProjectType;
  offset: number;
  max: number;
}

const ProjectPage: React.FC<Props> = ({ initialData, offset, max }) => {
  const { data: projectList } = useGetProjectList(initialData);

  const [totalPages, setTotalPages] = useState<number>(0);

  const { push } = useRouter();

  useEffect(() => {
    if (projectList) setTotalPages(projectList.totalPages);
  }, [projectList]);

  const paginate = (max: number) =>
    push(`${PROJECT_PAGE_PATH}?offset=${offset}&max=${max}`);

  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-3xl font-semibold mb-4 text-gray-500">프로젝트</h2>
      <section className="flex justify-between">
        <select
          value={max}
          onChange={(e) => paginate(parseInt(e.target.value))}
          className="cursor-pointer text-gray-500"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <PaginationController
          currentPage={offset}
          totalPages={totalPages}
          currentMax={max}
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
