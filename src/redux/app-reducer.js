
import { setHeaderThunkCreator } from "./header-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";



let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
     
        return {
          ...state,
          initialized: true,
        }
    }
    
    default:
      return {...state,
      };
  }
};

export let initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export let getAuthUserData = () => { 
  return async dispatch => {
   let promise = await dispatch(setHeaderThunkCreator());
  // await promise

  dispatch(initializedSuccess())

  //  promise.then(() => dispatch(initializedSuccess()))
  }
}


export default appReducer;
