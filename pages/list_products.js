import axios from "axios";

const products = async () => {
  try {
    const response = await axios.get(
      `https://es6demo-1c283-default-rtdb.firebaseio.com/products.json`
    );
    let datas = await response.data;
    let listTR = ``;
    for (const key in datas) {
      listTR = listTR + buildTR(datas[key], key);
    }
    return `<table class="table">
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
};

const buildTR = (item, key) => {
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
};

export { products };
