import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { projectUrl } from "@/libs";
import type { ProjectType } from "@/types";

export const getProjectList = async (
  offset: number,
  max: number
): Promise<ProjectType> => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) return redirect("/auth/refresh");

  const response = await fetch(
    new URL(
      `/api/v1${projectUrl.getProjectListUrl(
        offset.toString(),
        max.toString()
      )}`,
      process.env.BASE_URL
    ),
    {
      method: "GET",
      headers: { Cookie: `accessToken=${accessToken}` },
    }
  );

  if (!response.ok) {
    return redirect("/auth/login");
  }

  const project: ProjectType = await response.json();

  return project;
};
