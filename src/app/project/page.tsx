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
  console.log(offsetParam, maxParam);

  const projectList = await getProjectList(offset, max);

  if (!token && !shortTermToken) redirect(LOGIN_PAGE_PATH);

  return <ProjectPage initialData={projectList} offset={offset} max={max} />;
};

export default Project;
