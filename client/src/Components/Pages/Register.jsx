import React from 'react'

function Register() {
  return (
    <form className='register'>
        <h1>Register</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button>Register</button>
    </form>
  );
}

export default Register