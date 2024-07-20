"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { api } from '@/trpc/react'
import { ArrowUpRight, PencilIcon, SaveAll } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function BlogById({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: blogById, isLoading } = api.post.getBlogById.useQuery({ id: parseInt(params.id) });

  const [blogName, setBlogName] = useState(blogById?.name ?? "");
  const [blogDescription, setBlogDescription] = useState(blogById?.description ?? "");
  const [error, setError] = useState("");
  const updateBlog = api.post.updateBlogById.useMutation({
    onSuccess: () => {
      router.refresh();

      setError("");
    },

    onError: (error) => {
      setError(error.message);
    }
  })
  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    updateBlog.mutate({ id: parseInt(params.id), name: blogName, description: blogDescription });
  }
  if (isLoading) return <div>Loading...</div>
  return (
    <form onSubmit={handleOnSubmit}>
      <Card
        className="" x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Editando blog</CardTitle>
            <CardDescription>
              {String(blogById?.createdAt)}
              <br />
              {String(blogById?.updatedAt)}

            </CardDescription>
          </div>
          <Button type='submit' size="sm" className="ml-auto gap-1">
            Guardar
            <SaveAll className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>

          <Label htmlFor="title">Título</Label>
          <Input type="text" placeholder={blogById?.name} defaultValue={blogById?.name} onChange={(e) => setBlogName(e.target.value)} />
          <Label htmlFor="description">Descripción</Label>
          <Textarea placeholder={blogById?.description} defaultValue={blogById?.description} onChange={(e) => setBlogDescription(e.target.value)} />


        </CardContent>
      </Card>
    </form>
  )
}
