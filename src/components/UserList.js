import React, { useEffect, useState } from 'react'

function UserList({user, handleEdit, handleDelete,index}) {
    const [isEdit,setIsEdit] = useState(false)
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail ] = useState('')
    const [userNumber, setUserNumber] = useState('')
    useEffect(()=>{
        setUserName(user.name)
        setUserEmail(user.email)
        setUserNumber(user.number)
    },[isEdit])
  return (
            <>
                {
                    isEdit?
                        (<tr className="table-row">
                        <td>
                            <input
                             value={userName}
                             onChange={e => setUserName(e.target.value)}
                            />
                        </td>
                        <td>
                        <input
                             value={userEmail}
                             onChange={e => setUserEmail(e.target.value)}
                            />
                        </td>
                        <td>
                        <input
                             value={userNumber}
                             onChange={e => setUserNumber(e.target.value)}
                            />
                        </td>
                        <td>
                            <div className="user-actions">
                                <button onClick={() => {
                                    handleEdit({index,name:userName,email:userEmail,number:userNumber})
                                    setIsEdit(false)
                                }}>Done</button>
                                <button onClick={() => setIsEdit(false)}>Cancle</button>
                            </div>  
                        </td>
                    </tr>)
                    :(<tr className="table-row">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>
                        <div className="user-actions">
                            <button onClick={() => setIsEdit(true)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>  
                    </td>
                </tr>)}
            </>  
  )
}

export default UserList