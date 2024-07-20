import { CircleUser, Menu, Package2, Search } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import NavbarLogo from "./NavbarLogo";
import { navbarItems } from "./NavbarItems";
import SideNav from "./SideNav";
import NavbarSearchInput from "./NavbarSearchInput";
import NavbarDropdown from "./NavbarDropdown";
import { Session } from "@prisma/client";


export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavbarLogo />

        {navbarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}

      </nav>
      <SideNav />
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <NavbarSearchInput />
        {/* <NavbarDropdown /> */}
      </div>
    </header>
  )
}
