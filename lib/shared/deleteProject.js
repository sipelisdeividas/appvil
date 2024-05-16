import { APP_NAME } from "@/lib/config";

export const deleteProject = async (_id) => {
  await fetch(`${APP_NAME}/api/projects?id=${_id}`, {
    method: "DELETE",
  });
};
