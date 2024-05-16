import { redirect } from "next/navigation";

import { PROJECT_PAGE_PATH } from "@/constant";

export default async function Home() {
  redirect(PROJECT_PAGE_PATH);
}
