import React from 'react'


const Register = () => {
  return (
    <div>
      <form>
        <h2>Register </h2>
        <input type='text' placeholder='name' className='mt-3 mb-3 row'/>
        <input type='email' placeholder='email'className='mb-3 row'/>
        <input type='password' placeholder='password'className='mb-3 row'/>
        <input type='password' placeholder='confirm password'className='mb-3 row'/>
        <button>submit</button>
        
      </form>
    </div>
  )
}

export default Register
