import React from 'react'

const Profile = () => {
  return (
    <div className='flex w-9/12 flex-col gap-3 rounded-lg bg-gray-300 text-black'>
        <h1 className='text-3xl text-center mt-6'>B I O</h1>
            <div className='flex  items-center justify-around py-10 px-10 text-xl gap-10'>
                <div className=''>
                    <img src="./assets/img/Home.jpg" alt="Profile Pic" />
                </div>
                <div className='flex flex-col gap-3 w-1/2'>
                    <h1>Name : John Deo</h1>
                    <h1>Skills : Web Development, AIML & Cloud Computing</h1>
                    <h1>Age : 25</h1>
                    <h1>About : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab consequuntur fuga id vitae sed aspernatur similique molestiae ex tempora ea?</h1>
                </div>
            </div>
            <div className='flex items-center justify-around py-4 '>
                <div className='bg-stone-500 px-6 py-4 text-white'>
                    <h1>32</h1>
                    <h1 className='font-semibold'>Total Courses</h1>
                </div>
                <div className='bg-stone-500 px-6 py-4 text-white'>
                    <h1>1000+</h1>
                    <h1 className='font-semibold'>Total Students</h1>
                </div>
                <div className='bg-stone-500 px-6 py-4 text-white'>
                    <h1>24</h1>
                    <h1 className='font-semibold'>Courses Sold</h1>
                </div>
                <div className='bg-stone-500 px-6 py-4 text-white'>
                    <h1>$ 5000</h1>
                    <h1 className='font-semibold'>Total Earning</h1>
                </div>
            </div>
        </div>
  )
}

export default Profile