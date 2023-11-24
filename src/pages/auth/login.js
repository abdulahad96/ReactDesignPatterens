import React, { useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth.hook';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Todos from '../../Containers/todos';
import axios from 'axios';

import { login, logout } from '../../Redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const ValidateComponenet = ({ click }) => {
  return <p onClick={click}>aaaaaaaa</p>;
};
const LoginPage = () => {
  const {email,password} = useSelector(state => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
//   const location = useLocation();
//   const auth = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(login(formData));
    console.log(email)
    // try {
    //   // Make API request using Axios with data in JSON format
    //   const response = await axios.post('http://localhost:1000/api/user/login', formData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   // Handle the API response
    //   console.log('API response:', response.data);

    //   // You can perform additional actions based on the response, such as redirecting the user
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Handle errors as needed
    // }
  };

  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handleSubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className='text-center'>
            Not registered yet?{' '}
            <Link className='link-primary' to='Register'>
              Sign Up
            </Link>
          </div>
          <div className='form-group mt-3'>
            <label>Email address</label>
            <input
              type='email'
              required
              name='email'
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input
              type='password'
              security
              name='password'
              onChange={handleChange}
              className='form-control mt-1'
              placeholder='Enter password'
              required
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          <p className='text-center mt-2'>
            Forgot <Link href='#'>password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
