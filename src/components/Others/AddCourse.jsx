import React from 'react'

const AddCourse = () => {
  return (
    <div className=' w-9/12  rounded-lg bg-gray-300 text-black '>
        <h1 className='text-3xl text-center mt-8'>Add Course</h1>
      <div className='flex flex-row justify-around items-center rounded-lg bg-gray-300 text-black '>
            <div className='flex flex-col gap-5 px-20 py-10 w-1/2'>
                    <div>
                        <label htmlFor="">Course Title : </label>
                        <input className='p-2 w-full bg-transparent border-2 border-gray-400 text-black placeholder:text-gray-500 rounded' type="text" placeholder='Enter the Course Title'/>
                    </div>
                    <div>
                        <label htmlFor="">Course Date : </label>
                        <input className='p-2 w-full bg-transparent border-2 border-gray-400 text-black placeholder:text-gray-500 rounded' type="date" />
                    </div>
                    <div>
                        <label htmlFor="">Course Domain : </label>
                        <input className='p-2 w-full bg-transparent border-2 border-gray-400 text-black placeholder:text-gray-500 rounded' type="text" placeholder='Enter the Course Domain'/>
                    </div>
                    <div>
                        <label htmlFor="">Course Price : </label>
                        <input className='p-2 w-full bg-transparent border-2 border-gray-400 text-black placeholder:text-gray-500 rounded' type="number" placeholder='Enter the Course Price'/>
                    </div>
            </div>

            <div className='flex flex-col gap-5 px-20 py-10 w-1/2'>
                    <div className='flex flex-col '>
                        <label htmlFor="">Course Description : </label>
                        <textarea cols={50} rows={8} className='p-2 w-full bg-transparent border-2 border-gray-400 text-black placeholder:text-gray-500 rounded' type="text" placeholder='Enter the Course Description'/>
                    </div>

                    <button className='bg-stone-500 p-2 mt-5 text-white active:scale-90'>Add Course</button>
            </div>
        </div>
        </div>
  )
}

export default AddCourse