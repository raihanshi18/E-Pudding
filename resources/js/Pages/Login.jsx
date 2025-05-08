import { ProfileCircle, Lock } from 'iconsax-react'
import ImgForm from '../../assets/Image-Form.svg'

const Login = () => {
  return (
    <section className='flex justify-center items-center bg-Primary h-screen w-full'>
      <div className='flex w-[60%] h-[65%] shadow-lg rounded-lg overflow-hidden'>
        <img src={ImgForm} className='h-full'/>
        <div className='flex flex-col justify-center items-center w-full h-full bg-Secondary'>
          <h1 className='font-bold text-4xl mb-7 text-white'>Login</h1>
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
                required 
              />
            </div>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
              <a href="/login" className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Login</a>
              <a href="/register" className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login