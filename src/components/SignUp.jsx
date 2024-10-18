import React, { useState } from 'react';

export default function SignUp({ showSignUp, onSignUpSuccess }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation
 
  function resetForm() {
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const url = "http://localhost/bank_modern_app/PHP/formS.php";

  
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('password', password);
    formData.append('confirm_password', confirmPassword);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        alert(xhr.responseText);

        if (xhr.responseText.includes("Account created successfully")) {
          resetForm(); // Reset the form fields to empty
          onSignUpSuccess(); // Call the function to hide the sign-up form
        }
      } else {
        console.error('Error:', xhr.statusText);
        alert('There was an error. Please try again.');
      }
    };
    xhr.send(formData);
  };

  return (
    <div className="sign-up">
      <h2 className="text-gradient font-bold text-[24px] mt-0" id='error'>Create a Free Account</h2>
      
      <label className="text-gradient" htmlFor='firstName'>First Name</label>
      <input type='text' name='firstName' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label className="text-gradient" htmlFor='lastName'>Last Name</label>
      <input type='text' name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label className="text-gradient" htmlFor='phone'>Phone</label>
      <input type='text' name='phone' id='phone' value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <label className="text-gradient" htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className="text-gradient" htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <label className="text-gradient" htmlFor='confirmPassword'>Confirm Password</label>
      <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <div className='flex items-center justify-center flex space-x-4'>
        <input
          type='button' name='send' id='send' value="Create" onClick={handleSubmit}
          className="text-gradient font-bold text-[18px] border-[2px] border-[bg-blue-gradient] 
          rounded-[8px] px-[16px] py-[4px] cursor-pointer" />

        <p className='text-white'>Already have an account? <span className="text-gradient font-bold text-[20px] cursor-pointer" onClick={showSignUp}> Login</span></p>
     
     
     
      </div>
      <div style={{ textAlign: 'right' }}>
        <button className='btn-close' onClick={showSignUp} style={{ marginRight: '20' }}>
          Close form
        </button>
      </div>
      
    </div>
  );
}