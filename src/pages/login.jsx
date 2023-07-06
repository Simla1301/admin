import React from 'react'



const Login = () => {
  return (
    <div>
      <form>
        <h2>Login </h2>

        <input type='email' placeholder='email'className='mb-3 row'/>
        <input type='password' placeholder='password'className='mb-3 row'/>

        <button>login</button>
        <p>Don't have an account?</p>
        <a href='register'>Register</a>
      </form>
    </div>
  )
}

export default Login
