import React, { Fragment } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import NavbarLogo from '../navbar/NavbarLogo'
import { navbarItems, navbarTitulos } from './headerData'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export default function LandingSidenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <NavbarLogo />
          {navbarTitulos.map((item) => (

            <>
              <Accordion key={item.id} type="single" collapsible className="w-full">
                <AccordionItem value={item.id.toString()}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    {navbarItems.filter((item) => item.id === item.id).map(({ id, items, title }) => (
                      <span>
                        {items.map(({ title, id }) => (
                          <span>{id}</span>
                        ))}
                      </span>
                    ))}
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </>
            // <span key={item.id}> {item.title}</span>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
