import { getProfileApi, profileAPI } from "./api/api"

const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const CHANGE_STATUS = "CHANGE_STATUS"
const SET_STATUS = "SET_STATUS"


let initialState = {
        postsData: [
          { id: 1, message: "hello", like: 12 },
          { id: 2, message: "How you doing", like: 1 },
        ],
        newPostText: "new Post",
        profileData: null,
        status: 'new status'

}

// {
  // srcBg:
    // "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/nature-photography/desktop/nature_P2a_720x350.jpg.img.jpg",
  // photos: {large:"https://html5css.ru/w3css/img_avatar3.png",}
// }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: action.post,
                like: 0,
            };
            return {
              ...state,
              profileData: {...state.profileData},
              postsData: [...state.postsData, newPost],
              newPostText: "",
            }
      
        case UPDATE_NEW_POST: 
      
          return {
            ...state,
            newPostText: action.newText
          }

        case SET_USER_PROFILE: {
          // console.log(action.user)
          return {
            ...state,
            // profileData: [...action.posts],
            profileData: {...action.user}
          }
        }
        case CHANGE_STATUS : {
          return {
            ...state,
            status: action.text
          }
        }
        case SET_STATUS: {
          // debugger
          return {
            ...state,
            status: action.text
          }
        }
        default: return state
    }
}


export let addPostActionCreator = (post) => ({ type: ADD_POST,post})

export let newPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export let setUserProfile = (user) => ({type: SET_USER_PROFILE, user})

export let changeStatus = (text) => ({type: CHANGE_STATUS, text})

export let setStatus = (text) => ({type: SET_STATUS, text})

export let getProfileThunkCreator = (id) => {
  return dispatch => {
    getProfileApi(id)
    .then((Response) => {
      // console.log(Response)
    dispatch(setUserProfile(Response));
    });
  }
}

export const getStatusThunkCreator = (id) => {
  return dispatch => {
    profileAPI.getStatus(id)
    .then(response => {
      // debugger
      dispatch(setStatus(response.data))
    })
  }
}

export const updateStatusThunkCreator = (text) => {
  return dispatch => {
    profileAPI.updateStatus(text)
    .then(response => {
      // debugger
      if(response.data.resultCode === 0) {
        dispatch(setStatus(text))
      }
    })
  }
}

export default profileReducer;