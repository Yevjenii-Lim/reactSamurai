import { stopSubmit } from "redux-form";
import { authApi } from "./api/api";
import { setHeaderThunkCreator } from "./header-reducer";

const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
     
        return {
          ...state,
          ...action.data,
        }
    }
    
    default:
      return {...state,
      };
  }
};

export let setAuthUserData = (id,email, login,isAuth ) => ({ type: SET_USER_DATA, data: {id,email,login,isAuth} });

export let loginThunkCreator = (email, password, rememberMe) => { 

  return dispatch => {

    authApi.login(email, password, rememberMe,)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setHeaderThunkCreator())
      }else {
        // console.log(response.data.messages.lenght)
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
      }
    })
  }
}

export let logoutThunkCreator = (email, password, rememberMe) => { 
  return dispatch => {
    authApi.logout()
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null,null,null, false))
      }
    })
  }
}

export default authReducer;
