import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const submitHandler = (e) =>{
        e.preventDefault()

        console.log(email)
        console.log(password)
        handleLogin(email,password)
        setEmail('')
        setPassword('')
        

    }
    
    return (
        <div className='text-black flex items-center justify-center h-full w-full'>

        <form onSubmit={(e)=>{
            submitHandler(e)
            
            
        }} action="" className='flex border-2 border-black flex-col w-[400px] items-center mt-32 gap-4 h-[470px] rounded-md'>
                <h1 className='mt-20 text-3xl'>Login</h1>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='border-2 border-gray-400 px-4 py-2 mt-8 w-2/3' type="email" placeholder='Enter your email' autoComplete='current-email'/>
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='border-2 border-gray-400 px-4 py-2 w-2/3 mt-2' type="password" placeholder='Enter your password' autoComplete='current-password'/>

                <button className='bg-emerald-400 px-5 py-2 mt-10 rounded'>Login</button>
        </form>
    </div>
  )
}

export default Login