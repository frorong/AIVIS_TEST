export const authUrl = {
  loginUrl: () => "/authenticate",
};

export const projectUrl = {
  projectUrl: () => "/project.json",
  getProjectListUrl: (
    offset?: string,
    max?: string,
    sort?: string,
    order?: string
  ) =>
    `/project.json?offset=${parseInt(offset ?? "0") * 10}&max=${max ?? "10"}`,
};
