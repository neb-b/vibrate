import React from 'react'

const Login = (props) => {
  console.log("props", props)
  const { login } = props
  return (
    <div>
      <h3>Login</h3>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
