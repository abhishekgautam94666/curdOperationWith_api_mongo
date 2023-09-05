"use client";

import React, { useState } from "react";

import style from "@/app/page.module.css";

const page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    let result = await fetch("api/products", {
      method: "Post",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = await result.json();
    if (result.success) {
      alert("new product added");
      setName("");
      setColor("");
      setPrice("");
      setCompany("");
      setCategory("");
    }
  };

  return (
    <div className={style.editproduct}>
      <h1>Add Product</h1>

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

      <button className={style.btn} onClick={addProduct}>Add product</button>
    </div>
  );
};

export default page;
