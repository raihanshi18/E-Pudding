import { ProfileCircle, Lock } from 'iconsax-react'
import ImgForm from '../../assets/Image-Form.svg'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [isEmail, setIsEmail] = useState("")
  const [isName, setIsName] = useState("")
  const [isPassword, setIsPassword] = useState("")
  const [isPasswordConfirm, setIsPasswordConfirm] = useState("")
  const navigate = useNavigate()

  const UserRegister = async(e) => {
    e.preventDefault()
    try {
      await axios.post("/api/register", {
        email: isEmail,
        name: isName,
        password: isPassword,
        password_confirmation: isPasswordConfirm,
      })
      navigate("/login")
    } catch (error) {
      console.error('register failed')
    }
  }

  return (
    <section className='flex justify-center items-center bg-Primary h-screen w-full'>
      <form onSubmit={UserRegister} className='flex w-[60%] h-[65%] shadow-lg rounded-lg overflow-hidden'>
        <img src={ImgForm} className='h-full' />
        <div className='flex flex-col justify-center items-center w-full h-full bg-Secondary'>
          <h1 className='font-bold text-4xl mb-7 text-white'>Register</h1>
          <div>
            <div className='relative w-64 mb-2'>
              <label htmlFor="username" className='font-semibold mb-1 block'>Username</label>
              <div className='relative'>
                <ProfileCircle
                  size="20"
                  color="#555555"
                  variant="Outline"
                  className='absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none'
                />
                <input
                  type="text"
                  name='username'
                  id='username'
                  className='border-none rounded-md w-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-Primary'
                  placeholder='Username'
                  value={isName}
                  onChange={(e) => setIsName(e.target.value)}
                  required
                />
              </div>
            </div>

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
                  type="text"
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

            <div className='relative w-64 mb-2'>
              <label htmlFor="create-password" className='font-semibold mb-1 block'>Create Password</label>
              <div className='relative'>
                <Lock
                  size="20"
                  color="#555555"
                  variant="Outline"
                  className='absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none'
                />
                <input
                  type="password"
                  name='create-password'
                  id='create-password'
                  className='border-none rounded-md w-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-Primary'
                  placeholder='Create Password'
                  value={isPassword}
                  onChange={(e) => setIsPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className='relative w-64 mb-4'>
              <label htmlFor="confirm-password" className='font-semibold mb-1 block'>Confirm Password</label>
              <div className='relative'>
                <Lock
                  size="20"
                  color="#555555"
                  variant="Outline"
                  className='absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none'
                />
                <input
                  type="password"
                  name='confirm-password'
                  id='confirm-password'
                  className='border-none rounded-md w-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-Primary'
                  placeholder='Confirm Password'
                  value={isPasswordConfirm}
                  onChange={(e) => setIsPasswordConfirm(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className='flex flex-col gap-3 mt-5'>
              <button type='submit' className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Register</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Register