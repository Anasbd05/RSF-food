import { createContext } from "react"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

export function StoreContextProvider (props){


    let contextValue = {
       food_list
    }
     
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
