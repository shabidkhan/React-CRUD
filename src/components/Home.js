import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Store } from '../utils/Store';
import UserList from './UserList';
import './Home.css'
import Navbar from './Nav';

function Home() {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(Store)
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        console.log(!state.user.logedin.email,state.user.logedin);
        if(!state.user.logedin.email){
            navigate('/login');
        }
        setUserData(state.user.users)
      },[])

      const handleEdit = (user) => {
        dispatch({type:'EDIT_USER',payload:user})
        setUserData(userData=> {
            userData.splice(user.index, 1,user)
           return userData
       })
      };
    
      const handleDelete = (index) => {
        dispatch({type:'REMOVE_USER',payload:index})
        setUserData(userData=> {
             userData.splice(index, 1)
            return userData
        })
      };

      const onLogout = () => {
        dispatch({type:"LOGOUT"})
        navigate('/login')
      }
  return (
    <div className="home-container">
        <Navbar onLogout={onLogout}/>
        <h2>Welcome {state.user.logedin.name}!</h2>
        <div className="table-container">
            <table style={{width: "100%", }}>
                <thead className="table-header">
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <UserList key={index} {...{user, handleEdit, handleDelete, index}}/>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;