export const deleteProject = async (_id) => {
  await fetch(`https://appvil-eu.vercel.app/api/projects?id=${_id}`, {
    method: "DELETE",
  });
};
