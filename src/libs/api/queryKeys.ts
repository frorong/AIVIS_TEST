import { sortType, orderType } from "@/types";

export const authQueryKeys = {
  loginKey: () => ["login"],
};

export const projectQueryKeys = {
  getProjectListKey: (
    offset?: string,
    max?: string,
    sort?: sortType,
    order?: orderType
  ) => ["project", "list", offset, max, sort, order],
  postProject: () => ["project", "create"],
};
