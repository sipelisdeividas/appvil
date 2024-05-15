import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    firstImage: {
      type: String,
    },
    secondImage: {
      type: String,
    },
    thirdImage: {
      type: String,
    },
    fourthImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
