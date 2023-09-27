import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigo from "navigo"; // When using ES modules.
import { products } from "./pages/list_products";

const router = new Navigo("/");

router
  .on("/", function () {
    products().then((data) => {
      document.querySelector("#app").innerHTML = data;
    });
  })
  .on("/about", function () {
    document.querySelector("#app").innerHTML = `<h1> About </h1>`;
  })
  .resolve();
