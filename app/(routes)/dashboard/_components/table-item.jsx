import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { RemoveButton } from "./remove-button";
import { Pencil } from "lucide-react";

export function TableItem({ _id, name, slug, banner }) {
  return (
    <>
      <TableRow key={_id}>
        <TableCell className="font-medium">
          {_id?.substring(_id.length - 4)}
        </TableCell>
        <TableCell>
          <Link
            className="hover:text-primary"
            href={`/projects/${slug}`}
            aria-label={`Pamatykite projektą ${name}`}
          >
            {name}
          </Link>
        </TableCell>
        <TableCell>
          <Link
            href={`/projects/${slug}`}
            aria-label={`Pamatykite projektą ${name}`}
          >
            <Image
              className="rounded"
              src={banner}
              width="80"
              height="80"
              alt={name}
            />
          </Link>
        </TableCell>
        <TableCell className="text-right space-y-4 md:space-y-0 md:space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={`/edit-project/${slug}`}
              aria-label={`Redaguokite projektą ${name}`}
            >
              <Pencil className="h-5 w-5" />
            </Link>
          </Button>
          <RemoveButton _id={_id} />
        </TableCell>
      </TableRow>
    </>
  );
}
