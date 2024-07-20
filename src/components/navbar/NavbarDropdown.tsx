import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import Image from 'next/image'

export default function NavbarDropdown({ session }: { session: Session | null }) {
  return (
    <div className=' ml-auto flex-initial'>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            {session?.user.image ?
              <>
                <Image src={session.user.image} alt="" width={50} height={50} className="rounded-full" />
              </> :
              <>
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </>
            }


          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem><Link href={'/dashboard'}>Dashboard</Link></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>


            {!session ? (
              <Link href={'/api/auth/signin'}>Loguearse</Link>
            ) : (
              <Link href={'/api/auth/signout'}>Desloguearse</Link>
            )}

          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
