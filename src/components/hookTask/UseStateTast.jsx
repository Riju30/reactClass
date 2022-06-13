import React, { useEffect, useState } from 'react'

const UseStateTast = () => {
    let date = new Date().toLocaleTimeString()
    const [carname, setCarname] = useState("TATA")
    const [model, setModel] = useState("Nano")
    const [lyear, setLyear] = useState("2010")
    const [currTime, setCurrTime] = useState(date)

    useEffect(() => {
        setTimeout(() => {
            let date = new Date().toLocaleTimeString()
            setCurrTime(date)
            document.title = date
        }, 1000)
    })


    // let toggleModel = ()=>{
    //     if(model==="Nano"){
    //         setModel("Fortuner ")
    //     }else{
    //         setModel("Nano")
    //     }
    // }

    let changedata = (button) => {
        if (button === "car") {
            setCarname("Toyota")
        }
        if (button === "model") {
            if (model === "Nano") {
                setModel("Fortuner ")
            } else {
                setModel("Nano")
            }
        }
        if (button === "yr") {
            setLyear("2009")
        }
    }
    return (
        <>
            <br />
            <h1>{currTime}</h1>
            <br />
            <h1>Car name is <span style={{ color: "red" }}>{carname}</span> model <span style={{ color: "orange" }}>{model}</span> launched in <span style={{ color: "blue" }}>{lyear}</span></h1>
            <br />
            {/* <button onClick={()=>setCarname("Toyota")}>Carname</button>
        <button onClick={toggleModel}>Model</button>
        <button onClick={()=>setLyear("2009")}>Launch Year</button> */}
            <button onClick={() => changedata("car")}>Carname</button>
            <button onClick={() => changedata("model")}>Model</button>
            <button onClick={() => changedata("yr")}>Launch Year</button>

        </>
    )
}

export default UseStateTast