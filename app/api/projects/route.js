import { NextResponse } from "next/server";
import connect from "@/db";
import Project from "@/db/models/Project";

export async function POST(request) {
  const {
    name,
    banner,
    description,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  } = await request.json();
  await connect();
  await Project.create({
    name,
    banner,
    description,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}

export async function DELETE(request) {
  const projectId = request.nextUrl.searchParams.get("id");
  await connect();
  await Project.findByIdAndDelete(projectId);
  return NextResponse.json({ message: "Project Deleted" }, { status: 200 });
}
