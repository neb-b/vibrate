import React from 'react'

const Login = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <button>Login</button>
    </form>
  )
}

export default Login
