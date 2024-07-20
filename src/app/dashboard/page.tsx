import BlogCardTotal from '@/components/dashboard/BlogCardTotal';
import BlogTableCard from '@/components/dashboard/BlogTableCard';
import DonationsCard from '@/components/dashboard/DonationsCard';
import NewsCardTotal from '@/components/dashboard/NewsCardTotal';
import UserTableCard from '@/components/dashboard/UserTableCard';
import React from 'react'

export default async function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <BlogCardTotal />
        <BlogCardTotal />
        <NewsCardTotal />
        <NewsCardTotal />

      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <UserTableCard />
        <DonationsCard />
        <BlogTableCard />
      </div>
    </>

  )
}
