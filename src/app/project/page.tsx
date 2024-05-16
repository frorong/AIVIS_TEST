import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ProjectPage } from "@/pageContainer";
import { LOGIN_PAGE_PATH } from "@/constant";

export default async function Project() {
  const token = cookies().get("token")?.value;
  const shortTermToken = cookies().get("shortTermToken")?.value;

  if (!token && !shortTermToken) redirect(LOGIN_PAGE_PATH);

  return <ProjectPage />;
}
