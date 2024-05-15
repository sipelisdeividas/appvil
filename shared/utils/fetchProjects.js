export const fetchProjects = async () => {
  try {
    const res = await fetch("https://appvil-eu.vercel.app/api/projects", {
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
