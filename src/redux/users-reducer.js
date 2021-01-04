
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
     
        return {
          ...state,
          users: state.users.map(u => {
            if(u.id === action.userId) {
              // console.log(action.userId === u.id)
              return {...u, followed: true}
            }else {
              return u
            }
          })
        }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }else {
            return u
          }
        })
      }
    }
    case SET_USERS: {
// debugger
      // console.log('reducer')
      // console.log({...state, users:[...state.users, ...action.users]})
      // console.log(state)
      // console.log([...action.users][0] === [...state.users][0])
      
      return {
        ...state,
        users: action.users
      }
    }
    default:
      return {...state,
      users: [...state.users]
      };
  }
};

export let followAC = (userId) => ({ type: FOLLOW, userId: userId });
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;
