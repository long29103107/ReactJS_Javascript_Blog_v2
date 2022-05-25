import { createContext,useReducer } from "react"
import { reducer, initialState } from "./reducer"

export const SidebarContext = createContext(initialState);

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SidebarContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </SidebarContext.Provider>
  )
}