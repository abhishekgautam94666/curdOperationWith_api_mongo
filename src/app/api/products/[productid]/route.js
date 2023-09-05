import { connectionStr } from "@/lib/db";
import { product } from "@/lib/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const result = await product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.productid;
  const record = { _id: productId };
  await mongoose.connect(connectionStr);
  const result = await product.findById(record);

  return NextResponse.json({ result, success: true });
}


export async function DELETE(request,content) {
  const productId = content.params.productid;
  const record = {_id:productId};
  mongoose.connect(connectionStr);
  const result = await product.deleteOne(record);
 return NextResponse.json({result,success:true})  
}