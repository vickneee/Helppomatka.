import React from 'react'
import Noresult from './image/not found.gif'

const Empty = () => {
  return (
    <>
        <img src={Noresult} className="img-fluid" alt="logo" />
    </>
  )
}

export default Empty