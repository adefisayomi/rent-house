import Page from "@/components/Page";
import Logo from "@/components/Logo";
import AuthLogin from "@/src/sections/auth/AuthLogin";
import Link from "next/link";
import Routes from "@/src/Routes";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import useAlert from "@/src/hooks/useAlert";
import { errorDescriptions } from "@/src/constants";
import Layout from "@/src/layout";


export default function Login () {
    const router = useRouter()
    const {setAlert} = useAlert()
    useEffect(() => {
        if (router.query.error) {
            const error = errorDescriptions[router.query.error as string] || '';
            if (error) setAlert(error, 'error')
        }
    }, [router])
    return (
      <Page title="Login">
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <div className="w-full mx-auto flex flex-col items-center border  max-w-sm p-2 md:p-4">
                <div className="flex items-center justify-center my-6 "><Logo /></div>

                <div className="flex-grow w-full mb-5">
                    <AuthLogin />
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center border  max-w-sm px-2 py-6">
                <p className="text-xs">{"Don't have an account ? "}<Link className="underline text-primary font-bold" href={Routes.signup}>Signup</Link></p>
            </div>

            <footer className="flex flex-col gap-2 items-center mt-6">
                <ul className="flex items-center gap-4">
                    <li className="text-xs capitalize hover:underline" ><Link href='#'>about</Link></li>
                    <li className="text-xs capitalize hover:underline" ><Link href='#'>blog</Link></li>
                    <li className="text-xs capitalize hover:underline" ><Link href='#'>terms</Link></li>
                    <li className="text-xs capitalize hover:underline " ><Link href='#'>privacy</Link></li>
                </ul>

                <p className="text-xs capitalize">&copy; 2024 Rent-House Inc.</p>
            </footer>
        </div>
        </Page>
    )
}

Login.getLayout = (page: ReactNode) => <Layout disableFooter disableHeader>{page}</Layout>