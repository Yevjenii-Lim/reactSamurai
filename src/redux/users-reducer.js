
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTALL_USERS = "SET_TOTALL_USERS"
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
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
      for(let i of action.users) {
        state.users.push(i)
      }
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page
      }
    }
    case SET_TOTALL_USERS: {
      return {
        ...state,
        totalUsersCount: action.num
      }
    }
    case TOGGLE_ISFETCHING: {
      // console.log(action.isFetching)
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.follow ? [...state.followingProgress, action.id] 
        : state.followingProgress.filter(id => id !== action.id )
      }
    }
    default:
      return {...state,
      users: [...state.users]
      };
  }
};

export let follow = (userId) => ({ type: FOLLOW, userId: userId });
export let unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsers = (users) => ({type: SET_USERS, users: users})
export let setPage = (page) => ({type: SET_CURRENT_PAGE, page: page})
export let setTotalUsersCount = (num) => ({type: SET_TOTALL_USERS, num})
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
export let toggleFollowingProgress = (follow, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, follow, id})

export default usersReducer;
