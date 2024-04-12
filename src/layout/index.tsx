import { ReactNode } from "react";
import Header from "./header";
import AnimateRoute from "@/components/AnimateRoute";
import Footer from "./footer";



type LayoutProps = {
    disableHeader?: boolean;
    disableFooter?: boolean;
    children: ReactNode;
    disableNewsletter?: boolean;
}
export default function Layout ({children, disableFooter, disableHeader, disableNewsletter}: LayoutProps) {

    return (
        <div className="relative w-full min-h-screen">
            {!disableHeader && <header className="w-full bg-background z-10 sticky top-0 left-0">{<Header />}</header> }

            <AnimateRoute>
                <div>{children}</div>

                {!disableFooter && <footer><Footer disableNewsletter={disableNewsletter} /></footer>}
            </AnimateRoute>
        </div>
    )
}