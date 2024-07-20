"use client"
import BlogItem from '@/components/dashboard/blogs/BlogItem';
import { CreateBlogDrawer } from '@/components/dashboard/blogs/CreateBlogDrawer';
import FilterByStatus from '@/components/dashboard/blogs/FilterByStatus';
import { api } from '@/trpc/react'
import React, { useState } from 'react'

export default function Blogs() {
  const [filter, setFilter] = useState('Todos');
  const { data: blogs, isLoading } = api.post.getLatest.useQuery();


  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <div className='flex justify-between'>
        <div className='justify-start'>
          <span>
            <FilterByStatus setFilter={setFilter} filter={filter} />
          </span>
        </div>
        <div className='justify-end'>
          <CreateBlogDrawer />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        {filter == 'Todos' ? (
          blogs?.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))
        ) : (
          blogs
            ?.filter((blog) => blog.status === filter.toLocaleLowerCase())
            .map((blog) => (
              <BlogItem key={blog.id} {...blog} />
            ))
        )}
      </div>
    </div>
  );
}
