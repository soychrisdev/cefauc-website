import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import { api } from '@/trpc/server'
import { ArrowUpRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
export default async function BlogTableCard() {
  const blogs = await api.post.getLatest();

  return (
    // <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <Card
      className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
    >
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Blogs</CardTitle>
          <CardDescription>
            Blogs recientes creados en la plataforma.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/dashboard/blogs">
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
              <TableHead>Id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow>

                <TableCell>
                  <div className="font-medium">{blog.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {blog.status}
                  </div>
                </TableCell>

                <TableCell className="">{blog.id}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
    // </div>
  )
}
