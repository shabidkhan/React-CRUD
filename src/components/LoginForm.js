import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../utils/Store';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const {state,dispatch} = useContext(Store)

  useEffect(()=>{
    if(state.user.logedin.email){
        navigate('/');
    }
  },[])
  const handleLogin = (e) => {
    e.preventDefault();
    const existUser = state.user.users.find(user => user.email === email);
    if(existUser){ 
        if(existUser.password === password){
            dispatch({type:"USER_LOGIN", payload: existUser})
            setMessage('')
            navigate('/');
        }else{
            setMessage('Invalid Password')
        }
    }else{
        setMessage('User Not Exist.')
    }    
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      {
        message && <p className='errorMessage'>{message}</p>
      }
    </div>
  );
};

export default LoginForm;
