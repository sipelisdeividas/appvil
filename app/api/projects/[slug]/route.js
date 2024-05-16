import { NextResponse } from "next/server";
import connect from "@/db";
import Project from "@/db/models/Project";
import { slugify } from "@/shared/utils/slugify";

export async function GET(request, { params }) {
  const { slug } = params;
  await connect();
  const project = await Project.findOne({ slug });
  return NextResponse.json({ project }, { status: 200 });
}

export async function PUT(request, { params }) {
  await connect();
  const { slug } = params;
  const {
    name,
    description,
    banner,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  } = await request.json();

  const updateFields = {
    name,
    description,
    banner,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  };

  if (name) {
    updateFields.slug = slugify(name);
  }

  await Project.updateOne({ name: slug }, { $set: updateFields });

  // await Project.findByIdAndUpdate(id, {
  //   name,
  //   banner,
  //   description,
  //   firstImage,
  //   secondImage,
  //   thirdImage,
  //   fourthImage,
  // });
  return NextResponse.json({ message: "Project Updated" }, { status: 200 });
}
