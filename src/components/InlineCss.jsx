import React from 'react'
import './css/Style.css'

const InlineCss = () => {
    let pStyle = {
        color:"green",
        marginTop:"50px",
        border:"2px solid black",
        padding: "10px 20px 10px 20px",
        margin:" 10px 20px 10px 20px"
    }
  return (
    <>
        <h1 style={{color:"red",backgroundColor:"orange"}}>Hello World</h1>
        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae porro? Incidunt quod quo sit reprehenderit? Enim, a architecto nisi quas voluptates, atque, itaque corrupti molestias cupiditate minus consequatur qui!</p>

        <p className='pTag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laboriosam facilis quod accusamus tempore nesciunt porro adipisci quasi vero pariatur. At aspernatur et incidunt. Nihil impedit consequuntur ipsa sed repellendus!</p>
    </>
  )
}

export default InlineCss