import React, {useState} from 'react'
import Login from '../Auth/Login'

const Header = (props) => {

  const [userLogin, setUserLogin] = useState('')
  // const [userLogged, setUserLogged] = useState(null)
  // console.log(userLogin)
  props.handleUserLogin(userLogin)
  const logged = props.data
  
  // console.log(userLogin)
  // const loginUser = () =>{
  //   <Login/>
  //   console.log('clicked')
  // }

  return (
    <div>

        <div className='flex flex-row items-center justify-between px-14 py-8 text-xl '>
            <div className='flex items-center'>
                <h1 className='text-4xl'>X-Learn</h1>
            </div>
            <div id='nav' className='flex gap-10 items-center'>
                <h2>Home</h2>
                <h2>Courses</h2>
                <h2>Mentors</h2>
                <h2>Contact</h2>

                
                <button onClick={()=>{
                  setUserLogin('Login')
                }} id='loginbtn' className=' px-6 py-2'>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Header