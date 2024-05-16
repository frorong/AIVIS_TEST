const setCookie = (
  name: string,
  value: string,
  days: number,
  path: string = "/"
) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=${path}`;
};

export default setCookie;
