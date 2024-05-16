export const authUrl = {
  loginUrl: () => "/authenticate",
};

export const projectUrl = {
  postProjectUrl: () => "/project.json",
  getProjectListUrl: (
    offset?: string,
    max?: string,
    sort?: "created" | "name",
    order?: "asc" | "desc"
  ) =>
    `/project.json?offset=${parseInt(offset ?? "0") * 10}&max=${
      max ?? "10"
    }&sort=${sort ?? "created"}&order=${order ?? "desc"}`,
};
