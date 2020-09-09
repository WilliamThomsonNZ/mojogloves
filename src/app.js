//sticky nav bar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 250);
});
//init animate on scroll library
AOS.init();

//side-nav
const menuBtn = document.querySelector(".pop-menu"),
  sideNav = document.querySelector(".side-nav"),
  closeBtn = document.getElementById("close-btn"),
  sideList = document.getElementById("side-list");

menuBtn.addEventListener("click", () => {
  sideNav.style.width = "100%";
  closeBtn.style.display = "block";
  setTimeout(() => {
    sideList.style.opacity = "1";
  }, 300);
});

closeBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
  closeBtn.style.display = "none";
  sideList.style.opacity = "0";
});

sideNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-item")) {
    sideNav.style.width = "0";
    closeBtn.style.display = "none";
    sideList.style.opacity = "0";
  }
});
