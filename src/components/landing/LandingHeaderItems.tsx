"use client"
import { cn } from '@/lib/utils'
import { Tooltip } from '@radix-ui/react-tooltip'
import React, { Fragment } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { navbarItems, navbarTitulos } from './headerData'

export const LandingHeaderItems = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarTitulos.map(({ id, title }) => (
          <NavigationMenuItem key={id}>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {navbarItems.filter((item) => item.id === id).map(({ id, items, title }) => (
                <Fragment key={id} >
                  <ul className={`${id === 1 ? 'grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]' : 'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'}`}>
                    {
                      items.map(({ description, href, id, isCard, title }) => (
                        <Fragment key={id} >
                          {isCard ? (
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href={href}
                                >
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ) :
                            <ListItem key={id} href={href} title={title}>
                              {description}
                            </ListItem>
                          }
                        </Fragment>))
                    }
                  </ul>
                </Fragment>))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{children}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"