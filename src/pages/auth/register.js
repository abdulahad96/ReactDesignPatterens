import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link,Navigate,redirect,useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    type:'user'
    
  });

  const { email, password } = useSelector(state => state);
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(()=>{
    console.log(email)
  })
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Make API request using Axios with data in JSON format
      const response = await axios.post('http://localhost:1000/api/user/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('..')
      // Handle the API response
      // console.log('API response:', response.data);

      // You can perform additional actions based on the response, such as redirecting the user
    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }
  };
  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handleSubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className='text-center'>
            Already registered?{' '}
            <Link className='link-primary' to='..'>
              Sign In
            </Link>
          </div>
          <div className='form-group mt-3'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              required
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='e.g Jane Doe'
            />
              
          </div>
          <div className='form-group mt-3'>
            <label>Last Name</label>
           
              <input
              type='text'
              required
              name='lastName'
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='e.g Jane Doe'
            />
          </div>
          <div className='form-group mt-3'>
            <label>Email address</label>
            <input
              type='email'
              required
              name="email"
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='Email Address'
            />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              required
              security
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='Password'
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
