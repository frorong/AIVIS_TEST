import { sortType, orderType } from "@/types";

export const authUrl = {
  loginUrl: () => "/authenticate",
};

export const projectUrl = {
  postProjectUrl: () => "/project.json",
  getProjectListUrl: (
    offset?: string,
    max?: string,
    sort?: sortType,
    order?: orderType
  ) =>
    `/project.json?offset=${parseInt(offset ?? "0") * 10}&max=${
      max ?? "10"
    }&sort=${sort ?? "created"}&order=${order ?? "desc"}`,
};
