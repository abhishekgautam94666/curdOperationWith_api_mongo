import Link from "next/link";

const page = () => {
  return (
    <div className="main-page">
      <h1>CURD APP WIth MONGODB</h1>
      <div className="main-page2">
        <Link className="list" href={"/products"}>GO to Product list</Link>
        <Link className="list" href={"/addProduct"}>Add Product</Link>
      </div>
    </div>
  );
};

export default page;
