export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "underlined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};
