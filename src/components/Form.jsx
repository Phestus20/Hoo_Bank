import React, { useState } from 'react';
import SignUp from './SignUp';

export default function Form({ toggleForm }) {
  const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  if( name.length < 1 || mobile.length < 1 || password.length < 1)
  {document.getElementById('error').innerHTML="Invalid credentials"; return; }
    const url = "http://localhost/bank_modern_app/PHP/formL.php";
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('password', password);
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
  
        if (xhr.responseText.includes("Login successfully")) {
          window.location.href = "http://localhost/bank_modern_app/dashboard.php"; // Redirect to dashboard
        }
      } else {
        console.error('Error:', xhr.statusText);
        alert('There was an error. Please try again.');
      }
    };
    xhr.send(formData);
  };

  const handleSignUpSuccess = () => {
    setSignUp(false); // Hide the sign-up form on successful account creation
  };


  const showSignUp = () => {
    setSignUp(prev => !prev);
  };

  return (
    <div className="login">
      
  <h2 className="text-gradient  font-bold text-[24px]" id='error'>Login</h2><br></br>

<label className="text-gradient" htmlFor='name'>Name</label>
<input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />

<label className="text-gradient" htmlFor='mobile'>Mobile</label>
<input type='text' name='mobile' id='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />

<label className="text-gradient" htmlFor='password'>Password</label>
<input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

<div className='flex items-center justify-center flex space-x-4'>
  <input
    type='button' name='login' id='login' value="Log in" onClick={handleSubmit}
    className="text-gradient font-bold text-[18px] border-[2px] border-[bg-blue-gradient] 
    rounded-[8px] px-[16px] py-[4px] cursor-pointer" />
  <p className='text-white'>Don't have an account yet? 
    <span className="text-gradient font-bold text-[20px] cursor-pointer" onClick={showSignUp}> Create one</span>
  </p>
</div>

      {signUp && 
        <SignUp 
          showSignUp={showSignUp} 
          onSignUpSuccess={handleSignUpSuccess} 
        />
      }
      <div>
        <button className='btn-close mt-6 ' onClick={toggleForm}>
          Close form
        </button>
      </div>
        
    </div>
  );
}