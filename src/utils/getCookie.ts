const getCookie = (cookieKey: string): string | null => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === cookieKey) {
      return decodeURIComponent(value);
    }
  }

  return null;
};

export default getCookie;
