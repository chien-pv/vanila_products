import axios from "axios";
import Product from "../models/product";
import { router } from "../routes";

class ControlerProduct {
  static async index() {
    try {
      const response = await axios.get(
        `https://es6demo-1c283-default-rtdb.firebaseio.com/products.json`
      );
      let datas = await response.data;
      let listTR = ``;
      for (const key in datas) {
        if (datas[key]) {
          listTR = listTR + this.buildTR(datas[key], key);
        }
      }
      return `
      <a class="btn btn-success" href="/product/new" data-navigo>New Product</a>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Detail</th>
              <th scope="col">Info</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
          ${listTR}
          </tbody>
          </table>`;
    } catch (error) {
      return error;
    }
  }

  static new() {
    return `<form id="create">
    <div class="form-group">
      <label for="exampleInputEmail1">Detail</label>
      <input name="detail" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Image</label>
      <input name="image" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Info</label>
      <input name="info" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Price</label>
      <input name="price" type="text" class="form-control">
    </div>
    <button id="btn-submit"  type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  }

  static buildTR(item, key) {
    let { detail, info, price, name, image } = item;
    return `<tr>
      <th scope="row">${key}</th>
      <td>${detail || ""}</td>
      <td>${info || ""}</td>
      <td>${name || ""}</td>
      <td>${price || ""}</td>
      <td>
          <img src='${image}'  width="100" >
      </td>
    </tr>`;
  }

  static create() {
    window.onload = function () {
      let btn = document.getElementById("btn-submit");
      btn.onclick = async function (e) {
        e.preventDefault();
        const form = document.getElementById("create");
        let detail = form.elements[0].value;
        let image = form.elements[1].value;
        let info = form.elements[2].value;
        let price = form.elements[3].value;
        let newproduct = new Product(detail, image, info, price);
        let proJson = JSON.stringify(newproduct);
        // let p = await this.createPro(proJson);
        const response = await axios.post(
          "https://es6demo-1c283-default-rtdb.firebaseio.com/products.json",
          `${proJson}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        router.navigate("/");
      };
    };
  }
}

export default ControlerProduct;
