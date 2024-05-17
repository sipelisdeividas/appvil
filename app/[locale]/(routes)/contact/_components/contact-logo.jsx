import Image from "next/image";

export function ContactLogo() {
  return (
    <div className="md:w-3/4 p-4 hidden md:flex md:justify-center md:items-center md:flex-col">
      <Image
        priority
        className="hover:drop-shadow-lg"
        src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715441310/Appvil/logos/contact/contact_logo_yimtle.png"
        alt="Appvil Logo"
        width="400"
        height="300"
      />
    </div>
  );
}
