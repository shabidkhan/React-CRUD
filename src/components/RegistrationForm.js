import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../utils/Store';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('')
  const {state,dispatch} = useContext(Store)
  const navigate = useNavigate();

  useEffect(()=>{
    if(state.user.logedin.email){
        navigate('/');
    }
  },[])
  const handleRegister = (e) => {
    e.preventDefault();
    const existUser = state.user.users.find(user => user.email === email);
    if(!existUser){ 
        dispatch({type:"ADD_USER",payload:{email, password, name, number}}) 
        navigate('/login');
    }else{
        setMessage('User Already Exist.')
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      {
        message && <p className='errorMessage'>{message}</p>
      }
    </div>
  );
};

export default RegistrationForm;
