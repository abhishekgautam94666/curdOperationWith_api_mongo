import mongoose from "mongoose";

import { NextResponse } from "next/server";
import { connectionStr } from "@/lib/db";
import { product } from "@/lib/models/product";

export async function GET() {
  let data = [];
  let success = true;

  try {
    await mongoose.connect(connectionStr);
    data = await product.find();
  } catch (error) {
    data = { result: false };
    success: false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let Product = new product(payload);
  const result = await Product.save();
  return NextResponse.json({ result, success: true });
}
