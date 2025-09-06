const MENU_BUTTON_ID = "menu-button";
const NAV_ID = "main-nav";

function addMenuEventListener() {
  document.getElementById(MENU_BUTTON_ID).addEventListener("click", function () {
    const nav = document.getElementById(NAV_ID);
    if (nav.style.display === "block") {
      nav.style.display = "none";
      return;
    }
    nav.style.display = "block";
  });
}

export { addMenuEventListener };
