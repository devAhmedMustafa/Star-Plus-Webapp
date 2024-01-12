"use client"

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
    logged: false,
    setLogged: () => true,
})

export const GlobalContextProvider = ({children})=>{
    const [logged, setLogged] = useState(false);
    return (
        <GlobalContext.Provider value={{logged, setLogged}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=> useContext(GlobalContext);