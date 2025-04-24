import ImgForm from '../../assets/Image-Form.svg'

const Register = () => {
  return (
    <section className='flex justify-center items-center bg-Primary h-screen w-full'>
    <div className='flex w-[60%] h-[65%] shadow-lg rounded-lg overflow-hidden'>
      <img src={ImgForm} className='h-full'/>
      <div className='flex flex-col justify-center items-center w-full h-full bg-Secondary'>
        <h1 className='font-bold text-3xl mb-10'>Login Page</h1>
        <div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="username" className='font-semibold'>Username</label>
            <input className='border-none rounded-lg w-64' type="text" name='username' id='username' placeholder='Type your username' required/>
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="username" className='font-semibold'>Password</label>
            <input className='border-none rounded-lg w-64' type="password" name='username' id='username' placeholder='Type your Password' required/>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='p-3 bg-Primary rounded-xl hover:bg-[#fff5bd]'>Sign In</button>
            <button className='p-3 bg-Primary rounded-xl hover:bg-[#fff5bd]'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register