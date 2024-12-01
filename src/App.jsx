import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import { useState } from 'react'
import MentorDashboard from './components/Dashboard/MentorDashboard'
import StudentDashboard from './components/Dashboard/StudentDashboard'
import UserDashBoard from './components/Dashboard/UserDashBoard'


const App = () => {

  
  const [user, setUser] = useState(null)
  const [loginBtn, setLoginBtn] = useState(null)
  const [logged, setLogged] = useState(null)


  const handleLogin = (email,password) =>{
    if(email === 'a@e.com' && password === '123'){
      setUser('mentor')
      setLoginBtn('')
      alert('Logged In as Mentor')
      setLogged('MLogged')
    }else
    if(email === 'e@e.com' && password === '123'){
      setUser('student')
      setLoginBtn('')
      alert('Logged In as Student')
      setLogged('SLogged')
    }else{
      alert("Invalid Creds!!!!!!!!!!!!!!!!")
    }
  }

  const handleUserLogin = (userLogin) => {
    if(userLogin === 'Login'){
      setLoginBtn(userLogin)
    }
  }
  
  return (
    <>
      {/* {!user ? <Login handleLogin={handleLogin}/> : null} */}

      {!loginBtn ? <UserDashBoard changeUser={logged} handleUserLogin={handleUserLogin}/> :  <Login handleLogin={handleLogin}/>}
      {/* {user === 'student' ? <StudentDashboard/> :(user === 'mentor' ? <MentorDashboard/> : null)} */}

      {/* <MentorDashboard/> */}
      {/* <StudentDashboard/> */}
    </>
  )
}

export default App