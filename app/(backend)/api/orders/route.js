import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import Order from "@/lib/models/Order";

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    // Basic Validation
    if (!body.name || !body.phone || !body.room || !body.product || !body.qty) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (body.phone.length !== 10) {
      return NextResponse.json(
        { message: "Phone number must be 10 digits" },
        { status: 400 }
      );
    }

    const order = await Order.create(body);

    return NextResponse.json(
      { message: "Order placed successfully!", order },
      { status: 200 }
    );
  } catch (err) {
    console.error("Order API Error:", err);
    return NextResponse.json(
      { message: "Failed to place order" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ConnectDB();
    const orders = await Order.find().sort({ createdAt: -1 });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
