import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigo from "navigo"; // When using ES modules.
import ControlerProduct from "./pages/products_controller";
import { router } from "./routes";

router
  .on("/", function () {
    ControlerProduct.index().then((data) => {
      document.querySelector("#app").innerHTML = data;
    });
  })
  .on("/about", function () {
    document.querySelector("#app").innerHTML = `<h1> About </h1>`;
  })
  .on("/product/new", function () {
    document.querySelector("#app").innerHTML = ControlerProduct.new();
    ControlerProduct.create();
  })
  .resolve();

import axios from "axios";

// const response = await axios.put(
//   "https://es6demo-1c283-default-rtdb.firebaseio.com/products/1.json",
//   '{ "detail": "Jack", "image": "Sparrow", "info": "info 123", "price": "999" }',
//   {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }
// );

// let pro = new Product("Jack", "Sparrow2", "info 1233", "9998");
// console.log(JSON.stringify(pro));
// let proJson = JSON.stringify(pro);

// const response = await axios.post(
//   "https://es6demo-1c283-default-rtdb.firebaseio.com/products.json",
//   `${proJson}`,
//   {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }
// );

// const response2 = await axios.delete(
//   "https://es6demo-1c283-default-rtdb.firebaseio.com/products/1.json"
// );

// let a = new Student("nguyen van B");
// console.log(a);

// function Product(name, email) {
//   this.name = "";
//   this.email = email;
// }

// function Laptop(color) {
//   this.color = color;
// }

// Laptop.prototype = new Product();

// var b = new Laptop("a");

// console.log(b);
