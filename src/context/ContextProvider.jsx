import React from 'react'
import { useState } from 'react'
import CreateContext from './CreateContext'

const ContextProvider = ({children}) => {
    const [data , setData] = useState(0)
  return (
    <>
        <CreateContext.Provider value={{data, setData}}>
            {children}
        </CreateContext.Provider>
    </>
  )
}

export default ContextProvider