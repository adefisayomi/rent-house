import Logo from "@/components/Logo";
import { Menu } from "lucide-react";



export default function MobileHeader () {

    return (
        <div className="w-full mx-auto max-w-9xl flex items-center justify-between p-2 h-24">
            <Logo/>

            <div className="flex items-center gap-4">
                <Menu />
            </div>
        </div>
    )
}