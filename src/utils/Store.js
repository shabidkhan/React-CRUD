import { createContext, useReducer } from 'react';

export const Store =  createContext();

const initialState = {
    user:{
      users:  localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')):[],
      logedin: localStorage.getItem('logedinData')? JSON.parse(localStorage.getItem('logedinData')): {}
    },
    
};

function reducer(state,action) {
    switch (action.type) {
       
        case 'ADD_USER':{
          const newUser = action.payload;
          const users = [...state.user.users, newUser]
          localStorage.setItem("userData", JSON.stringify(users))
          return { ...state, user:{...state.user,users}};    
        }
        case "REMOVE_USER":{
          const removeUser = action.payload;
          const users = state.user.users.filter((user, index) => index!==removeUser)
          localStorage.setItem("userData", JSON.stringify(users))
          return { ...state, user:{...state.user,users}};
        }
        case 'EDIT_USER':{
            const updateUser = action.payload;
            const users = state.user.users.map((user,index) => {
                if(updateUser.index===index ){
                    return {...user,...updateUser}
                }
                return user;
            })
            localStorage.setItem("userData", JSON.stringify(users))
            return { ...state, user:{...state.user,users}};

        }
        case 'USER_LOGIN':{
            const user = action.payload;
            localStorage.setItem("logedinData", JSON.stringify(user))
            return { ...state, user:{...state.user,logedin:user}};
        }
        case 'LOGOUT' :{
            localStorage.setItem("logedinData", JSON.stringify({}))
            return { ...state, user:{...state.user,logedin:{}}};
        }
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
  }