export const deleteProject = async (_id) => {
  await fetch(`http://localhost:3000/api/projects?id=${_id}`, {
    method: "DELETE",
  });
};
