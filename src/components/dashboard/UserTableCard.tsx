import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import { api } from '@/trpc/server'
import { ArrowUpRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
export default async function UserTableCard() {
  const users = await api.user.getFive();
  return (
    // <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <Card
      className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
    >
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Usuarios</CardTitle>
          <CardDescription>
            Usuarios recientes registrados en la plataforma.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/dashboard/usuarios">
            Ver todos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuarios</TableHead>
              <TableHead>Rol</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow>

                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {user.email}
                  </div>
                </TableCell>

                <TableCell className="">{user.role}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
    // </div>
  )
}
