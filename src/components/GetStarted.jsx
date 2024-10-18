import React, { useState } from 'react';
import styles from '../style';
import Form from './Form';
import { useNavigate } from 'react-router-dom'; // Update to use `useNavigate`
import { arrowUp } from '../assets';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const toggleForm = (event) => {
    // Check if the target of the click event is the overlay
    if (event.target.classList.contains('overlay')) {
      setShowForm(true);
    } else {
      setShowForm((prev) => !prev);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  console.log("submit123")
    const url = "http://localhost/bank_modern_app/PHP/form.php"; // Ensure this URL is correct
  
    // Create a FormData object and append the input values
    const formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('password', password);
  
    // Use XMLHttpRequest to send the data
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
        navigate('/dashboard'); // Navigate to the dashboard upon successful submission
      } else {
        console.error('Error:', xhr.statusText);
        alert('There was an error. Please try again.');
      }
    };
    xhr.send(formData);
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer started`}
        onClick={toggleForm}
      >
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} id='displayform'>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-mediun text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">Get</span>
            </p>
            <img src={arrowUp} alt="arrow up" className='w-[23px] h-[23px] object-contain' />
          </div>
          <p className="font-poppins font-mediun text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>

      {showForm && (
        <>
          <div className="overlay" />
          <Form
            name={name}
            setName={setName}
            mobile={mobile}
            setMobile={setMobile}
            email={email}
            setEmail={setEmail}
            onSubmit={handleSubmit}
            toggleForm={toggleForm}
          />
        </>
      )}
    </>
  );
};

export default GetStarted;