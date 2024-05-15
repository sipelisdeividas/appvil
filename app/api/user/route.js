import connect from "@/db";
import User from "@/db/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connect();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Added" }, { status: 201 });
}
