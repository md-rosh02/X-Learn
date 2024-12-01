import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-10 py-8'>
        <div>
            <h3 className='text-lg'>Hi</h3>
            <h1 className='text-2xl'>Student✌️</h1>
        </div>
        <div>
            <button className='text-2xl bg-emerald-400 px-4 py-2 rounded active:scale-90'>Logout</button>
        </div>
    </div>
  )
}

export default Header