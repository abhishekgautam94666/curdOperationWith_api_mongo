"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import style from "@/app/page.module.css"


export default function page(props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductsDetail();
  }, []);

  const getProductsDetail = async () => {
    let productId = props.params.editproduct;
    let productDtaa = await fetch(
      "http://localhost:3000/api/products/" + productId
    );

    productDtaa = await productDtaa.json();
    let result = productDtaa.result;

    if (productDtaa.success) {
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    let productId = props.params.editproduct;

    let data = await fetch("http://localhost:3000/api/products/" + productId,{
      method: "PUT",
      body: JSON.stringify({ name, price, color, category, company }),
    });

    data = await data.json();
    if (data.result) {
      alert("update succesfull");
      router.push("/products");
    }
  };

  return (
    <div className={style.editproduct}>
      <h1>Update Product</h1>

      <input
      className={style.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Product name"
      />
      <input
       className={style.input}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter Price"
      />
      <input
       className={style.input}
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="Enter Color name"
      />
      <input
       className={style.input}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        placeholder="Enter Company name"
      />
      <input
       className={style.input}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Enter Category name"
      />

      <button className={style.btn} onClick={updateProduct}>update product</button>
      <Link href={"/products"}>Go to Product list</Link>
    </div>
  );
}
