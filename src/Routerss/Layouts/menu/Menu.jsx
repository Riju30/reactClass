import React from 'react'
import { useContext } from 'react'
import CreateContext from '../../../context/CreateContext'
import "./menu.css"

const Menu = () => {
  const value = useContext(CreateContext)
  return (
    <div>
        <h1 className='backColor'>
            Hello i am Menu
        </h1>
        <h1>{value.data}</h1>
    </div>
  )
}

export default Menu