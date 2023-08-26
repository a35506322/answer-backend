import "./assets/scss/all.scss";
import { Offcanvas } from "bootstrap";

const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new Offcanvas(offcanvasEl)
);

// init
document.addEventListener("DOMContentLoaded", function () {
  // 當前網址
  const currentUrl = window.location.href;
  // 選取sideBarMenu 裡所有的 li
  const sideBarMenuLi = document.querySelectorAll("#sideBarMenu > ul > li");
  sideBarMenuLi.forEach((li) => {
    if (li.children[1].href === currentUrl) {
      li.classList.add("active");
      li.children[1].classList.remove("text-black");
      li.children[1].classList.add("text-success");
    }
  });

  const chevronDowns = document.querySelectorAll("i.bi.bi-chevron-down");
  chevronDowns.forEach((chevronDown) => {
    chevronDown.addEventListener("click", function ($event) {
      this.classList.toggle("active-icon");
    });
  });
});
console.log("Hello world!");
