import React from 'react'
import SignIn from '../Components/SignIn'

const Login = ({setIsAuth}) => {
  return (
    <div className=' '>
      <SignIn setIsAuth={setIsAuth} />
    </div>
  )
}

export default Login