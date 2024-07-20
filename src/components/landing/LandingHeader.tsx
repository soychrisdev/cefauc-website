import React from 'react'
import NavbarLogo from '../navbar/NavbarLogo'
import SideNav from '../navbar/SideNav'
import NavbarSearchInput from '../navbar/NavbarSearchInput'
import NavbarDropdown from '../navbar/NavbarDropdown'
import Link from 'next/link'
import { LandingHeaderItems } from './LandingHeaderItems'

export default function LandingHeader() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b-2 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CEFAUC</span>
        </Link>
        <div className="flex flex-col items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          asds
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <LandingHeaderItems />
        </div>
      </div>
    </nav>
  )
}
