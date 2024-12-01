import React from 'react'
import Header from '../Others/Header'
import About from '../Others/About'
import { useState } from 'react'

const UserDashBoard = (props) => {

  console.log(props.changeUser)
  return (
    <div className=''>
      <Header data={props.changeUser} handleUserLogin={props.handleUserLogin}/>   
      <About/>
    </div>
  )
}

export default UserDashBoard