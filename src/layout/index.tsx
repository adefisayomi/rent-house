import { ReactNode } from "react";
import Header from "./header";
import AnimateRoute from "@/components/AnimateRoute";



type LayoutProps = {
    disableHeader?: boolean;
    disableFooter?: boolean;
    children: ReactNode
}
export default function Layout ({children, disableFooter, disableHeader}: LayoutProps) {

    return (
        <div className="relative w-full min-h-screen h-full">
            {!disableHeader && <header className="w-full bg-background z-10 overflow-y-hidden sticky top-0 left-0">{<Header />}</header> }

            <AnimateRoute>
                <div>{children}</div>
            </AnimateRoute>
        </div>
    )
}