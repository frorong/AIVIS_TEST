import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ProjectPage } from "@/pageContainer";
import { LOGIN_PAGE_PATH } from "@/constant";

import { getProjectList } from "@/app/api";

interface Params {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Project: React.FC<Params> = async ({ searchParams }) => {
  const token = cookies().get("token")?.value;
  const shortTermToken = cookies().get("shortTermToken")?.value;

  const offsetParam = searchParams?.offset;
  const offset = typeof offsetParam === "string" ? parseInt(offsetParam) : 0;

  const maxParam = searchParams?.max;
  const max = typeof maxParam === "string" ? parseInt(maxParam) : 10;

  const sortParam = searchParams?.sort;
  const sort = (typeof offsetParam === "string" ? sortParam : "created") as
    | "name"
    | "created";

  const orderParam = searchParams?.order;
  const order = (typeof orderParam === "string" ? orderParam : "desc") as
    | "asc"
    | "desc";

  const projectList = await getProjectList(offset, max, sort, order);

  if (!token && !shortTermToken) redirect(LOGIN_PAGE_PATH);

  return (
    <ProjectPage
      initialData={projectList}
      offset={offset}
      max={max}
      order={order}
      sort={sort}
    />
  );
};

export default Project;
