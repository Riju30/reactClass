import React, { useState } from 'react'

export default function Hoc(){
  return (
    <>
        <FinalFun cmp={NewFun}/>
        {/* <NewFun/> */}
        
    </>
  )
}


const FinalFun = (prop)=>{
    return (
        <>
            <prop.cmp/>
        </>
    )  
}

const NewFun = ()=>{
    let [val,setVal]=useState(0);
    return(
        <>
            <h1>{val}</h1>
            <button onClick={()=>setVal(val+1)}>Click</button>
        </>
    )
}

