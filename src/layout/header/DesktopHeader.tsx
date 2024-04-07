import Logo from "@/components/Logo";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useRouter } from "next/router";
import UserMenu from "./UserMenu";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { _services } from "@/src/home/ServiceDescription";



export default function DesktopHeader () {

    return (
        <div className="w-full mx-auto max-w-9xl flex items-center justify-between p-2 h-24">
            <Logo/>
            <NavMenu />

            <div className="flex items-center gap-4">
                
                <UserMenu component={<DropDownComponent />}/>
            </div>
        </div>
    )
}

function DropDownComponent () {
  return (
    <DropdownMenuContent className="w-60">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <Link href={'#'}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>

            <Link href={'#'}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>
            
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => signOut({redirect: false})}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>

        </DropdownMenuContent>
  )
}

export function NavMenu() {

  const {route} = useRouter()
  const routeName = `${route.split('/').pop()?.toLowerCase()}`

  return (
    <NavigationMenu>
      <NavigationMenuList>

        <div className="flex flex-col gap-0 items-center">
          <NavigationMenuItem>
              <Link href='/'>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xs capitalize rounded-none pb-0`}>
                      home
                  </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          {routeName === '' && <span className="w-full bg-primary h-[2px] max-w-[40%]"/>}
        </div>

        <div className="flex flex-col gap-0 items-center">
          <NavigationMenuItem>
              <Link href='/about-us'>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xs capitalize rounded-none pb-0`}>
                      about-us
                  </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          {routeName === 'about-us' && <span className="w-full bg-primary h-[2px] max-w-[40%]"/>}
        </div>


        <NavigationMenuItem>
        <div className="flex flex-col gap-0 items-center">
          <Link href='/services'>
            <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} text-xs capitalize rounded-none pb-0`}>
              services
            </NavigationMenuTrigger>
          </Link>
          {routeName === 'services' && <span className="w-full bg-primary h-[2px] max-w-[70%]"/>}
        </div>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {_services.map((service, index) => (
                <ListItem
                  key={index}
                  title={service.header}
                  href={`/services/${service.header.split(' ').join('-').toLowerCase()}`}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="flex flex-col gap-0 items-center">
          <NavigationMenuItem>
              <Link href='/contact'>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xs capitalize rounded-none pb-0`}>
                      contact
                  </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          {routeName === 'contact' && <span className="w-full bg-primary h-[2px] max-w-[40%]"/>}
        </div>
        
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
          <div className="text-sm font-medium leading-none capitalize "> {title}</div>
          <p className="line-clamp-2 text-xs leading-snug font-light text-muted-foreground pt-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
