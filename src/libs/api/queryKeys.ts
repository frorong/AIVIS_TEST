export const authQueryKeys = {
  loginKey: () => ["login"],
};

export const projectQueryKeys = {
  getProjectListKey: (
    offset?: string,
    max?: string,
    sort?: string,
    order?: string
  ) => ["project", "list", offset, max, sort, order],
  postProject: () => ["project", "create"],
};
