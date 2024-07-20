import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, BookAIcon } from 'lucide-react';

export default function BlogCardTotal() {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total de blogs publicados
        </CardTitle>
        <BookAIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+0</div>
        <p className="text-xs text-muted-foreground">
          +0% desde el último mes
        </p>
      </CardContent>
    </Card>
  )
}
