import Link from "next/link";

import { DeleteProject } from "@/lib/DeleteProject";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function () {
  const products = await getProducts();

  return (
    <div className="center">
      <h1>PRODUCTS LIST</h1>

      <table border={1}>
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">COLOR</th>
            <th scope="col">COMPANY</th>
            <th scope="col">CATEGORY</th>
          </tr>
        </thead>

          {products.map((item) => (
        <tbody>
            <tr>
              <td> {item.name}</td>
              <td> {item.price}</td>
              <td> {item.color}</td>
              <td> {item.company}</td>
              <td> {item.category}</td>
              <td><Link href={"/products/"+item._id}>Edit</Link></td>
              <td> <DeleteProject id={item._id} /></td>
            </tr>
        </tbody>
          ))}
      </table>
    </div>
  );
}
