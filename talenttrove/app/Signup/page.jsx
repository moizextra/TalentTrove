import React from 'react'

const page = () => {
  return (
    <div className="login-signup-container">
      <div className="form-container login-form-container">
        <form className="form signup-form" method="POST">
          <h2 className='text-green-500'>Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              id="signup-name"
              placeholder="Name"
              required
            />
            <label htmlFor="signup-name">Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="signup-email"
             
              placeholder="Email"
              required
              />
            <label htmlFor="signup-email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="signup-password"
              
              required
              />
            <label htmlFor="signup-password">Password</label>
          </div>
          <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-20">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default page