import React, { useState } from 'react'
import loginn from '../Login/Login.module.css'

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className={loginn.loginPopup}>
      <form className={loginn.loginContainer}>
        
        <div className={loginn.loginTitle}>
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src="/images/cross.jpg" 
            alt="close" 
          />
        </div>

        <div className={loginn.loginInputs}>
          {currState === "Login" ? null : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit" className={loginn.btnn}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className={loginn.loginCondition}>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default Login
