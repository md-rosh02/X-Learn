import React from 'react'
import { useState } from 'react'


const MSideNav = ({handleSection}) => {

    const [sendSection, setSendSection] = useState(null)
    handleSection(sendSection)
    console.log(sendSection)

  return (
    <div className='flex flex-col items-center gap-8 text-lg px-16 py-10'>
        <button
            onClick={()=>{
                setSendSection('Profile')
            }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Profile</button>
        <button
        onClick={()=>{
            setSendSection('Add')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Add Course</button>
        <button
        onClick={()=>{
            setSendSection('Manage')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Manage Courses</button>
        <button
        onClick={()=>{
            setSendSection('Notification')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Notifications</button>
        <button
        onClick={()=>{
            setSendSection('Payment')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Payouts</button>
    </div>
  )
}

export default MSideNav