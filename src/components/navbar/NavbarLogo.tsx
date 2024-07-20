import { Package2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CEFAUC</span>
    </Link>
  )
}
