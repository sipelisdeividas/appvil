import { NextResponse } from "next/server";
import connect from "@/db";
import Project from "@/db/models/Project";

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { status: 200 });
}

export async function PUT(request, { params }) {
  await connect();
  const { id } = params;
  const {
    name,
    description,
    banner,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  } = await request.json();
  await Project.findByIdAndUpdate(id, {
    name,
    banner,
    description,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  });
  return NextResponse.json({ message: "Project Updated" }, { status: 200 });
}
