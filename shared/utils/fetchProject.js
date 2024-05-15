export const fetchProject = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
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
