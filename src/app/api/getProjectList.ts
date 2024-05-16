import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { projectUrl } from "@/libs";
import type { ProjectType } from "@/types";
import { LOGIN_PAGE_PATH } from "@/constant";

export const getProjectList = async (
  offset: number,
  max: number
): Promise<ProjectType> => {
  const token = cookies().get("token")?.value;
  const shortTermToken = cookies().get("shortTermToken")?.value;

  if (!token && !shortTermToken) redirect(LOGIN_PAGE_PATH);

  const response = await fetch(
    new URL(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/api${projectUrl.getProjectListUrl(offset.toString(), max.toString())}`,
      process.env.NEXT_PUBLIC_API_BASE_URL
    ),
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    return redirect(LOGIN_PAGE_PATH);
  }

  const project: ProjectType = await response.json();

  return project;
};
