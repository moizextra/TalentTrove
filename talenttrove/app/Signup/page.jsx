"use client"; // This is a client component 
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  async(e) => {
    e.preventDefault()
    try{

        const res= await fetch("https://talenttrove-b29c0-default-rtdb.firebaseio.com/TalentTroveUser.json", {
            method: "POST",
      headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: name,
            email: email,
            password: password,
        })
    });
    if(res.ok){
        toast.success('Signup Successfully!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}catch(e){
console.log(e)
toast.error('Some Error Occured!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
   

    // Reset form inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <div className="login-signup-container ">
      <div className="form-container login-form-container">
        <form className="form signup-form" onSubmit={handleSubmit}>
          <h2 className="text-green-500">Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              id="signup-name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="signup-name">Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="signup-email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="signup-email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="signup-password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="signup-password">Password</label>
          </div>
          <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-20" onClick={handleSubmit}>Sign up</button></form>
      </div>
    </div>
    <ToastContainer/>
              </>
  );
};

export default Page;
