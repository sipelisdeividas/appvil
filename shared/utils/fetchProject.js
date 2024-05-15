import { APP_NAME } from "@/lib/config";

export const fetchProject = async (name) => {
  try {
    const res = await fetch(`${APP_NAME}/api/projects/${name}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading project: ", error);
  }
};
