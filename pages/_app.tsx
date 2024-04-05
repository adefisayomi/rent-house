import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomToast from "@/components/CustomToast";
import { SessionProvider } from "next-auth/react"
import GlobalStateProvider from "@/src/contexts";


const poppins = Poppins({ subsets: ["latin"], weight: ['400', '300', '900'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={session}>
      <GlobalStateProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomToast />
          <div className={poppins.className}>
              {getLayout(<Component {...pageProps} />)}
          </div>
        </ThemeProvider>
      </GlobalStateProvider>
    </SessionProvider>
  )
}
