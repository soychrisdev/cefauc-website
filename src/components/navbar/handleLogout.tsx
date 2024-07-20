
import { Button } from "@/components/ui/button"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { getServerAuthSession } from "@/server/auth";
import { Session } from "inspector"
import { signIn, signOut, useSession } from "next-auth/react"
export default function HandleLogout() {

  return (
    <>



      {/* {session ? (
        // <DropdownMenuItem onClick={() => signOut()}>Desloguearse</DropdownMenuItem>

      ) : (
        // <DropdownMenuItem onClick={() => signOut()}>Loguearse</DropdownMenuItem>
      )} */}
    </>



  )
}
