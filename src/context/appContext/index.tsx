import React, { ReactNode } from 'react'
import { useProviderApp } from '../../hooks/useProviderApp'
import { AppContextType } from '../../common/types'

const AppContext = React.createContext<AppContextType | null>(null)

const AppContextProvider = ({children} : { children: ReactNode }) => {
    const app = useProviderApp()
    
    return (
        <AppContext.Provider value={app}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}