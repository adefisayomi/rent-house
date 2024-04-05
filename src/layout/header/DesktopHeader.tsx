import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
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
import Routes from "@/src/Routes";



export default function DesktopHeader () {

    return (
        <div className="w-full mx-auto max-w-9xl flex items-center justify-between p-2 h-24">
            <Logo/>

            <div className="flex items-center gap-4">
                <NavMenu />

                <Link href={Routes.login}>
                    <Button size='sm'>
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    )
}


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

function NavMenu () {

  const {route} = useRouter()
  const routeName = `/${route.split('/').pop()?.toLowerCase()}`
    console.log(routeName)
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
            menuItems.map((menu, index) => (
                <div key={index} className="flex flex-col gap-0 items-center">
                <NavigationMenuItem>
                    <Link href={menu.url}>
                        <NavigationMenuLink 
                            className={`${navigationMenuTriggerStyle()} text-xs capitalize rounded-none pb-0`}>
                            {menu.name}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {routeName === menu.url && <span className="w-full bg-primary h-[2px] max-w-[40%]"/>}
                </div>
            ))
        }
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'


export const menuItems = [
    {name: 'home', url: '/'},
    {name: 'services', url: '/services'},
    {name: 'listing', url: '/listing'},
    {name: 'about us', url: '/about-us'},
]