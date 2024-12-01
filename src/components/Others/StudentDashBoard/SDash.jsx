import React from 'react'
import SSideNav from './SSideNav'
import Profile from './Profile'
import StudentCourses from './StudentCourses'
import Cart from './Cart'
import { useState } from 'react'

const SDash = () => {

    const [section, setSection] = useState(null)

    const handleSection = (recSection) =>{
        setSection(recSection)
    }

  return (
    <div className='flex mt-2 p-10 w-full gap-3'>

        {section === 'Profile' ? <Profile/> :(section === 'MyCourse' ? <StudentCourses/> : (section === 'Cart' ? <Cart/>: <Profile/>))}

        <div className='p-8 bg-gray-300 rounded-lg'>
            <SSideNav handleSection={handleSection}/>
        </div>
    </div>
  )
}

export default SDash