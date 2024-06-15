import React, { useState } from 'react'
const Footer = () => {
  const [email,setEmail]=useState(" ");
  const subscribe=async()=>{
    if(!email){
      return;
    }
    const response = await fetch('http://localhost:8000/Subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email }) // Assuming your backend expects the message in this format
    }).then(res => res.text());
    //console.log(response.msg=="okkk");
    setEmail("");

  }
  return (
    <footer className="footer p-10 bg-base-200 text-base-content" style={{ backgroundColor: '#eeee', color: 'black' , marginTop:'50px'}}>
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
   <form> 
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="subscribe" className="input input-bordered join-item"  style={{ backgroundColor: '#eeee', color: 'black', border:
      '2px solid gray'}} /> 
        <button type="button"className="btn btn-primary join-item" onClick={subscribe}>Subscribe</button>
      </div>
    </fieldset>
   </form> 
</footer>
  )
}

export default Footer