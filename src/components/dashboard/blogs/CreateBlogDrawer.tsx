"use client"
import * as React from "react"
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"


export function CreateBlogDrawer() {

  const router = useRouter();
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      toast({
        title: 'Blog creado',
        description: 'El blog se ha creado correctamente',

      })
      router.refresh();
    }
  })

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    console.log(formData.get("title"))
    createPost.mutate({ name: formData.get("title") as string })
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Crear blog</Button>
      </DrawerTrigger>
      <DrawerContent>
        <form onSubmit={handleOnSubmit}>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Creación de un Blog</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center">

                <Label htmlFor="title">Ingrese el título del Blog</Label>
                <Input type="text" name="title" />
                {/* <input type="text" placeholder="Descripción" /> */}

              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button type="submit">Crear</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
