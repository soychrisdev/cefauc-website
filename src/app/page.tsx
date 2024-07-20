import Link from "next/link";
import { Presentacion } from "@/components/landing/Presentacion";
import NavbarDropdown from "@/components/navbar/NavbarDropdown";
import NavbarLogo from "@/components/navbar/NavbarLogo";
import { LandingHeaderItems } from "@/components/landing/LandingHeaderItems";
import LandingSidenav from "@/components/landing/LandingSidenav";
import { Hero } from "@/components/landing/Hero";
import { Reuniones } from "@/components/landing/Reuniones";
import { Noticias } from "@/components/landing/Noticias";
import { Encuentranos } from "@/components/landing/Encuentranos";
import Footer from "@/components/landing/Footer";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavbarLogo />
          <LandingHeaderItems />
        </nav>
        <LandingSidenav />
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <NavbarDropdown session={session} />
        </div>
      </header>
      <div className=" w-full flex-initial flex-col gap-10 items-center">
        <Presentacion />
        <Hero />
        <Reuniones />
        <Noticias />
        <Encuentranos />
      </div>
      <Footer />
    </>
  );
}

