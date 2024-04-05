import { ReactNode, createContext, memo } from "react";
import { useSession } from "next-auth/react";

type StateContextProps = {
    user?: any
}

export const StateContext = createContext({} as StateContextProps)

const GlobalStateProvider = ({children}: {children: ReactNode}) => {

    const {data} = useSession()

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

export default memo(GlobalStateProvider)