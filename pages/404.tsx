import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/src/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";



export default function NotFound () {
    const router = useRouter()
    return (
        <Page title="Page not found">
            <div className="flex flex-col justify-center items-center p-2 min-h-[75vh]">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl capitalize mb-5">
                    page not found!
                </h1>

                <p className="text-xs font-normal">
                    <span className="font-bold uppercase">404 Error</span> - This page cannot be found. Try a Search or have a look at our suggestions for you.
                </p>

                <Input placeholder="Search..." className="w-full max-w-5xl p-6 text-sm bg-muted rounded-lg my-4"/>

                <Button className="w-full max-w-xs" onClick={() => router.back()}>
                    Go Back
                </Button>
            </div>
        </Page>
    )
}

NotFound.getLayout = (page: ReactNode) => <Layout disableNewsletter >{page}</Layout>