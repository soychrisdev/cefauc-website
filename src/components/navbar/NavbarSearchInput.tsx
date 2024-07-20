import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

export default function NavbarSearchInput() {
  return (
    <form className="hidden ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>
    </form>
  )
}
