const forms = document.getElementById("contact-Form");
window.onload = () => {
  forms.reset();
};

function popupMsg() {
  const popupContainer = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  popupContainer.style.right = "10px";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.right = "-400px";
  });
}

const navBarOpen = document.getElementById("navBtn");
const navBarClose = document.getElementById("navBtnClose");
const navBar = document.getElementById("sideMenu");
const navLinks = navBar.querySelectorAll("a");

navBarOpen.addEventListener("click", () => {
  navBar.style.right = "0";
  navBar.style.display = "block";
  navBarOpen.style.display = "none";
  navBarClose.style.display = "block";
  document.body.classList.add("no-scroll");
});

navBarClose.addEventListener("click", () => {
  navBar.style.right = "-100%";
  navBarOpen.style.display = "block";
  navBarClose.style.display = "none";
  document.body.classList.add("no-scroll");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.style.right = "-100%";
    navBarOpen.style.display = "block";
    navBarClose.style.display = "none";
    document.body.classList.add("no-scroll");
  });
});
