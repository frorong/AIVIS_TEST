"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard, PaginationController } from "@/components";
import { ProjectType, sortType, orderType } from "@/types";

import { useEffect, useState } from "react";
import { PROJECT_PAGE_PATH } from "@/constant";
import { useRouter } from "next/navigation";

interface Props {
  initialData: ProjectType;
  offset: number;
  max: number;
  sort: sortType;
  order: orderType;
}

const ProjectPage: React.FC<Props> = ({
  initialData,
  offset,
  max,
  sort: initialSort,
  order: initialOrder,
}) => {
  const { data: projectList } = useGetProjectList(
    max,
    offset,
    initialSort,
    initialOrder,
    initialData
  );

  const [totalPages, setTotalPages] = useState<number>(0);
  const [order, setOrder] = useState<orderType>(initialOrder);
  const [sort, setSort] = useState<sortType>(initialSort);

  const { push } = useRouter();

  useEffect(() => {
    if (projectList) setTotalPages(projectList.totalPages);
  }, [projectList]);

  const paginate = (max: number) =>
    push(
      `${PROJECT_PAGE_PATH}?offset=${offset}&max=${max}&order=${order}&sort=${sort}`
    );

  useEffect(() => {
    paginate(max);
  }, [order, sort]);

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
        {totalPages && (
          <PaginationController
            currentPage={offset}
            totalPages={totalPages}
            currentMax={max}
          />
        )}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as sortType)}
          className="cursor-pointer text-gray-500"
        >
          <option value="created">created</option>
          <option value="name">name</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value as orderType)}
          className="cursor-pointer text-gray-500"
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
        <button
          className="cursor-pointer text-gray-500"
          onClick={() => push(`${PROJECT_PAGE_PATH}/create`)}
        >
          프로젝트 추가
        </button>
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
