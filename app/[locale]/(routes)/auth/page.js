import { BannerSection } from "./_components/banner-section";
import { LogoSection } from "./_components/logo-section";
import { StatusBlock } from "./_components/status-block";
import { unstable_noStore } from "next/cache";

export default function AuthPage() {
  unstable_noStore();
  return (
    <div className="min-h-screen   flex justify-center pb-10 md:pb-0 pt-36">
      <div className="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <LogoSection />
          <StatusBlock />
        </div>
        <BannerSection />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Autentifikacija",
};
