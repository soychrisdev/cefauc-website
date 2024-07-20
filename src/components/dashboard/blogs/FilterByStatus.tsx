import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookmarkMinus, BookmarkCheck, ArchiveIcon, ListFilter } from 'lucide-react'
import React from 'react'

export default function FilterByStatus({ setFilter, filter }: { filter: string, setFilter: (filter: string) => void }) {
  const [checked, setChecked] = React.useState(false)
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild >
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-sm"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filtro</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuLabel>Filtro por</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem onClick={() => setFilter('Todos')}>
          Todos
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setFilter('Borrador')}>
          Borrador
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setFilter('Publicado')}>
          Publicado
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setFilter('Archivado')}>
          Archivado
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
