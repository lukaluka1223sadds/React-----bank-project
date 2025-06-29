"use client"

import { Provider } from "react-redux"
import { Store } from "./store"; 
interface Children{
    children:React.ReactNode
}

export default function AppProvider(e:Children){
    return(
        <Provider store={Store}>
            {e.children}
        </Provider>
    )
} 