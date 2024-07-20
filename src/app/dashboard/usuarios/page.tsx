import UserTableCard from '@/components/dashboard/UserTableCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'
import { api } from '@/trpc/server'
import { ArrowUpRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default async function UsuariosPage() {
  const users = await api.user.getAll();
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      tabla de usuarios que permita eliminar, edit, y ver detalles
    </div>
  )
}
