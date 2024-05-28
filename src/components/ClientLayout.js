'use client';

import { createContext, useEffect, useRef, useState } from "react"
export const context = createContext();

const ClientLayout = ({ children }) => {
    const [focus, setFocus] = useState(false);
    const ref = useRef(null);
    

  useEffect(()=> {
    ref.current.addEventListener('click', (event)=> {
        setFocus(false)
    })
  }, [focus])

  return (
    <main ref={ref}>
        <context.Provider value={{focus, func: setFocus}}>
            {children}
        </context.Provider>
    </main>
  )
}

export default ClientLayout