import { ProfileCircle, Lock } from 'iconsax-react'
import ImgForm from '../../assets/Image-Form.svg'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isLoggedIn } from '@/utils/auth'

const Login = () => {
  const [isEmail, setIsEmail] = useState("")
  const [isPassword, setIsPassword] = useState("")
  const navigate = useNavigate()

  const UserLogin = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: isEmail,
        password: isPassword,
      })
      const token = res.data.accesstoken
      localStorage.setItem("token", token)
      navigate("/")
    } catch (err) {
      setError("Login gagal. Cek email dan password.");
    }
  }

  useEffect(() => {
    if(isLoggedIn()){
      navigate("/")
    }
  }, [])

  return (
    <section className='flex justify-center items-center bg-Primary h-screen w-full'>
      <form onSubmit={UserLogin} className='flex w-[60%] h-[65%] shadow-lg rounded-lg overflow-hidden'>
        <img src={ImgForm} className='h-full'/>
        <div className='flex flex-col justify-center items-center w-full h-full bg-Secondary'>
          <h1 className='font-bold text-4xl mb-7 text-white'>Login</h1>
          <div>
          <div className='relative w-64 mb-2'>
            <label htmlFor="email" className='font-semibold mb-1 block'>Email</label>
            <div className='relative'>
              <ProfileCircle 
                size="20" 
                color="#555555" 
                variant="Outline" 
                className='absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none' 
              />
              <input 
                type="email" 
                name='email' 
                id='email' 
                className='border-none rounded-md w-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-Primary' 
                placeholder='email'
                value={isEmail}
                onChange={(e) => setIsEmail(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className='relative w-64'>
            <label htmlFor="password" className='font-semibold mb-1 block'>Password</label>
            <div className='relative'>
            <Lock 
                size="20" 
                color="#555555"
                variant="Outline" 
                className='absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none'
                />
              <input 
                type="password" 
                name='password' 
                id='password' 
                className='border-none rounded-md w-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-Primary' 
                placeholder='Password'
                value={isPassword}
                onChange={(e) => setIsPassword(e.target.value)}
                required 
              />
            </div>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
              <button type='submit' className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Login</button>
              <Link to="/register" className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Register</Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login