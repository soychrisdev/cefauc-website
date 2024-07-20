"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { api } from "@/trpc/react"
import { Post } from "@prisma/client"
import { useQueryClient } from "@tanstack/react-query"
import { ArchiveIcon, ArrowUpRight, BookCheckIcon, BookmarkCheck, BookmarkMinus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BlogItem({ updatedAt, name, id, createdAt, description, createdById, status }: Post) {
  const router = useRouter()
  const updateStatus = api.post.updateBlogStatus.useMutation()

  const handleValueChange = (value: string) => {
    updateStatus.mutate({ id: id, status: value }, {
      onSuccess: () => {
        toast({
          title: `Estado actualizado del blog: ${name.slice(0, 60).concat("...")}`,
          description: `El estado del blog ${name} ha sido actualizado a ${value}`,
        })


        router.refresh()

      },

      onError: () => toast({
        title: `Error al actualizar el estado del blog: ${name}`,
        description: "Error al actualizar el estado del blog, por favor intenta de nuevo.",
        variant: "destructive",
      }),
    })


  }

  return (
    <Card key={id} className="">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="mr-4 text-wrap">
            <CardTitle>{name}</CardTitle>
          </div>
          <div className="">
            <Select defaultValue={status} onValueChange={handleValueChange}>
              <SelectTrigger id="status" aria-label="Estado">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="borrador"><BookmarkMinus className=" h-4 w-4" /> Borrador</SelectItem>
                <SelectItem value="publicado"><BookmarkCheck className=" h-4 w-4" /> Publicado</SelectItem>
                <SelectItem value="archivado"><ArchiveIcon className=" h-4 w-4" /> Archivado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {description ?? "Sin descripción"}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href={`/dashboard/blogs/${id}`}>
            editar
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
