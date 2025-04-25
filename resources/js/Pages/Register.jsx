import { ProfileCircle, Lock } from 'iconsax-reactjs'
import ImgForm from '../../assets/Image-Form.svg'

const Register = () => {
  return (
    <section className='flex justify-center items-center bg-Primary h-screen w-full'>
      <div className='flex w-[60%] h-[65%] shadow-lg rounded-lg overflow-hidden'>
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
                  required
                />
              </div>
            </div>

            <div className='flex flex-col gap-3 mt-5'>
              <a href="/login" className='p-2 mx-10 bg-Primary rounded-xl hover:bg-[#fff5bd] flex justify-center'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register