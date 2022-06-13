import React from 'react'

const PropsExample = (param) => {
  return (
    <>
        <h1>Student Name:{param['name']} </h1>
        <h1>Student email:{param['email']} </h1>
        <h1>Student Name:{param['phone']} </h1>
        <h1>Student Name:{param['class']} </h1>
    </>
  )
}

export default PropsExample