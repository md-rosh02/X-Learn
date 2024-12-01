import React, { useEffect } from 'react'
import { useState } from 'react'

const SSideNav = ({handleSection}) => {

    const [section, setSection] = useState(null)
      handleSection(section)
    

  return (
    <div className='flex flex-col items-center gap-8 text-lg px-16 py-10'>
        <button
            onClick={()=>{
                setSection('Profile')
            }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Profile</button>
        <button
        onClick={()=>{
            setSection('MyCourse')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>My Course</button>
        <button
        onClick={()=>{
            setSection('Cart')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Cart</button>
        <button
        onClick={()=>{
            setSection('Other')
        }}
        className='bg-stone-500 text-white px-4 py-2 w-52 text-center active:scale-90'>Other Courses</button>
    </div>
  )
}

export default SSideNav