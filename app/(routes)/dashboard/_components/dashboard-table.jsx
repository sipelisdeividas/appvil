import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableItem } from "./table-item";
import { fetchProjects } from "@/lib/shared/fetchProjects";

export async function DashboardTable() {
  const { projects } = await fetchProjects();
  return (
    <Table>
      {projects.length === 0 && (
        <TableCaption>Projektų sąrašas tuščias.</TableCaption>
      )}

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Pav.</TableHead>
          <TableHead>Logotipas</TableHead>
          <TableHead className="text-right">Veiksmai</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableItem
            key={project._id}
            _id={project._id}
            name={project.name}
            banner={project.banner}
            slug={project.slug}
          />
        ))}
      </TableBody>
    </Table>
  );
}
