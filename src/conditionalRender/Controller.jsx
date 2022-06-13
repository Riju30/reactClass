import React from 'react'
import Home from './Home'
import Login from './Login.Jsx'

const Controller = () => {
    let isLogin = true
    const control = ()=>{
        if(isLogin){
            return <Home user="Riju" />
        }else{
            return <Login/>
        }
    }
  return (
    <>
        {control()}
    </>
  )
}

export default Controller