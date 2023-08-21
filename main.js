import "./assets/scss/all.scss";
import { Offcanvas } from "bootstrap";

const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new Offcanvas(offcanvasEl)
);
console.log("Hello world!");
