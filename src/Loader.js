import React from 'react'

const Loader = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader