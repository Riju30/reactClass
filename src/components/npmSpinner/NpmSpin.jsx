import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots } from 'react-loader-spinner'

const NpmSpin = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return (
        <>
            <div style={style}>
                {/* <Audio color="#00BFFF" height={80} width={80} /> */}
                <BallTriangle color="#FF5F1F" height={100} width={100} />
                {/* <Bars color="#00BFFF" height={80} width={80} /> */}
                {/* <Circles color="#00BFFF" height={80} width={80}/> */}
                {/* <Grid color="#00BFFF" height={80} width={80} /> */}
                {/* <Hearts color="#00BFFF" height={80} width={80} /> */}
                {/* <Oval color="#00BFFF" height={80} width={80} /> */}
                {/* <Puff color="#00BFFF" height={80} width={80} /> */}
                {/* <Rings color="#00BFFF" height={80} width={80} /> */}
                {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
                {/* <ThreeDots color="#00BFFF" height={80} width={80} /> */}
            </div>
        </>
    )
}

export default NpmSpin