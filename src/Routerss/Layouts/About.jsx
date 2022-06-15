import React from 'react'
import { useContext } from 'react'
import CreateContext from '../../context/CreateContext'

const About = () => {
  const value = useContext(CreateContext)
  let {data, setData} = value
  return (
    <div style={{textAlign:"center"}}>
    <h1>{data}</h1>
    <button onClick={()=>setData(data+1)}>Increment</button>
    <button onClick={()=>setData(data-1)}>Decrement</button>
    </div>
  )
}

export default About