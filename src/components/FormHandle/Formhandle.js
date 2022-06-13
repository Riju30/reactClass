import React, { useState } from 'react'

const Formhandle = () => {
    let [input , setInput] = useState({})
    let handleInput=(e)=>{
        let name=e.target.name;
        let value = e.target.value;
        setInput({...input ,[name]:value} )
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        alert(input.name)
    }
  return (
    <>
        <form action="">
            <p>Name:</p>
            <input name='name' value={input.value} onChange={handleInput}/>
            <p>Email:</p>
            <input name='email' value={input.value} onChange={handleInput}/>
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default Formhandle