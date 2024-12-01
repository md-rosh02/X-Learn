import React from 'react'
import MSideNav from './MSideNav'
import Profile from './Profile'
import AddCourse from './AddCourse'
import ManageCourse from './ManageCourse'
import Notifications from './Notifications'
import Payment from './Payment'
import { useState } from 'react'

const MDash = () => {

    const [section, setSection] = useState(null)

    const handleSection = (recSection) =>{
        setSection(recSection)
    }
    
  return (
    <div className='flex mt-2 p-10 w-full gap-3'>

        {section === 'Profile' ? <Profile/> :(section === 'Add' ? <AddCourse/> : (section === 'Manage' ? <ManageCourse/>: (section === 'Notification' ? <Notifications/>: (section === 'Payment' ? <Payment/>: <Profile/>))))}
        <div className='p-8 bg-gray-300 rounded-lg'>
            <MSideNav handleSection={handleSection}/>
        </div>
    </div>
  )
}

export default MDash