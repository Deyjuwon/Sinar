
import SignIn from '../Components/SignIn'

// eslint-disable-next-line react/prop-types
const Login = ({setIsAuth}) => {
  return (
    <div className=' '>
      <SignIn setIsAuth={setIsAuth} />
    </div>
  )
}

export default Login