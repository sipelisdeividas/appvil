import { APP_NAME } from "@/lib/config";

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${APP_NAME}/api/projects`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
};
