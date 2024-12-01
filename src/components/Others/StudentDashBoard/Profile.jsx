import React from 'react'

const Profile = () => {
  return (
    <div className='flex w-9/12 flex-col gap-3 rounded-lg bg-gray-300 text-black'>
        <h1 className='text-3xl text-center mt-8'>B I O</h1>
            <div className='flex  items-center justify-around py-6 px-10 text-xl gap-10'>
                <div className=''>
                    <img src="./assets/img/Home.jpg" alt="Profile Pic" />
                </div>
                <div className='flex flex-col gap-3 w-1/2'>
                    <h1>Name : Abraham Lincoln</h1>
                    <h1>Skills : Web Development, AIML & Cloud Computing</h1>
                    <h1>Age : 25</h1>
                    <h1>About : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab consequuntur fuga id vitae sed aspernatur similique molestiae ex tempora ea?</h1>
                </div>
            </div>
            <div className='flex items-center justify-around py-6'>
                <div className='bg-stone-500 px-6 py-3 text-white text-sm'>
                    <h1>8</h1>
                    <h1 className='font-semibold text-lg'>Total Courses</h1>
                </div>
                <div className='bg-stone-500 px-6 py-3 text-white text-sm'>
                    <h1>85%</h1>
                    <h1 className='font-semibold text-lg'>Total Progress</h1>
                </div>
                <div className='bg-stone-500 px-6 py-3 text-white text-sm'>
                    <h1>1392/1500</h1>
                    <h1 className='font-semibold text-lg'>Total Points</h1>
                </div>
            </div>
        </div>
  )
}

export default Profile