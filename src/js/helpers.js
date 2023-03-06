export const openSidebar = () => {
  const appSidebar = document.querySelector("#app-sidebar");
  return appSidebar.classList.contains("show")
    ? appSidebar.classList.remove("show")
    : appSidebar.classList.add("show");
};
