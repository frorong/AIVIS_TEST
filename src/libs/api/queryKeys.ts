export const authQueryKeys = {
  loginKey: () => ["login"],
};

export const projectQueryKeys = {
  getProjectListKey: (
    offset?: string,
    max?: string,
    sort?: "created" | "name",
    order?: "asc" | "desc"
  ) => ["project", "list", offset, max, sort, order],
  postProject: () => ["project", "create"],
};
