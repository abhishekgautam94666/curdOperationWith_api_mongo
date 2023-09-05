"use client";

import { useRouter } from "next/navigation";

export const DeleteProject = (props) => {
  const router = useRouter();
  const deleteRecord = async () => {
    let response = await fetch(
      "http://localhost:3000/api/products/" + props.id,
      {
        method: "DELETE",
      }
    );

     response = await response.json();

    if (response.success) {
      alert("Product deleted");
      router.push("/products");
    }
  };
  return <button onClick={deleteRecord}>Delete</button>;
};
