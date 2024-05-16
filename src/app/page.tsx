import { redirect } from "next/navigation";

const PROJECT_PAGE_PATH = "/project";

export default async function Home() {
  redirect(PROJECT_PAGE_PATH);
}
