import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ReactNode } from "react"
import Link from "next/link"
import Routes from "@/src/Routes"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"
import useSettings from "@/src/hooks/useSettings"




  
  export default function UserMenu ({component}: {component: ReactNode}) {

    const {user} = useSettings()
    const router = useRouter()
    const restrictedRoutes = ['login', 'signup']

    return (
      <>
      {/* <img src="" alt=""  /> */}
      {
        !restrictedRoutes.includes(router.asPath.split('/').pop()!) ? !user ? (
          <Link href={Routes.login}>
            <Button size={'sm'} >
              Login
            </Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Avatar className=" border-2 border-muted rounded-full w-10 h-10 p-[2px]">
                <AvatarImage src={user?.image!} alt={user?.name!} className="w-full h-full object-cover rounded-full " />
                <AvatarFallback className="bg-background text-lg uppercase" >{user?.name?.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {component ? component : null}
          </DropdownMenu>
        ) : null
      }
      </>
      
    )
  }
  