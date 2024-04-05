import useGetThemeMode from "@/src/hooks/useGetThemeMode";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Logo () {

    const theme = useGetThemeMode()
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(() => theme === 'dark')
    }, [theme])

    return (
        <Link href='/'>
            <>
                <Image
                    // src={isDark ? "/logo-dark-main.png" : '/logo-light-main.png'}
                    src='/logo.svg'
                    alt="Logo" 
                    className="object-cover w-[120px]"
                    width={300}
                    height={300}
                    priority
                />
            </>
        </Link>
    )
}