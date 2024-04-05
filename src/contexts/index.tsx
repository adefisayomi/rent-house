import { ReactNode, createContext, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";
import { useSession } from "next-auth/react";



type ContextProps = {
    user: any;
}

export const StateContext = createContext({} as ContextProps)

export default function GlobalStateProvider ({children}: {children: ReactNode}) {

    const {data} = useSession()
    // 
    

    return (
        <StateContext.Provider
            value={{
                user: data?.user
            }}
        >
            {children}
        </StateContext.Provider>
    )
}