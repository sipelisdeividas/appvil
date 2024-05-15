import { unstable_noStore } from "next/cache";
import { DashboardBreadcrumb } from "./_components/dashboard-breadcrumb";
import { DashboardHeader } from "./_components/dashboard-header";
import { DashboardTable } from "./_components/dashboard-table";

export default async function DashboardPage() {
  unstable_noStore();

  return (
    <div className="container mx-auto w-full items-center justify-center antialiased overflow-hidden drop-shadow-sm pt-24 md:pt-36">
      <DashboardBreadcrumb />
      <DashboardHeader />
      <DashboardTable />
    </div>
  );
}

export const metadata = {
  title: "Valdymo Skydelis",
};
