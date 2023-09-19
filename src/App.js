import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegistrationForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
