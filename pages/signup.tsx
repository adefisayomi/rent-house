import Page from "@/components/Page";
import Logo from "@/components/Logo";
import Link from "next/link";
import Routes from "@/src/Routes";
import AuthSignup from "@/src/sections/auth/AuthSignup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAlert from "@/src/hooks/useAlert";
import { errorDescriptions } from "@/src/constants";


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
      <Page title="Create Account">
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-5 "><Logo /></div>

            <div className="w-full mx-auto flex flex-col items-center border  max-w-sm px-2 md:px-4 py-10">
                <div className="flex-grow w-full mb-5">
                    <AuthSignup />
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center border  max-w-sm px-2 py-6 mt-4">
                <p className="text-xs mr-1">{"Have an account ? "}<Link className="font-bold underline text-primary" href={Routes.login}>Login</Link></p>
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