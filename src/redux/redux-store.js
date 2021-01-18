import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profile-reduce'
import messagesReducer from './messages-reduce'
import friendsReducer from './friends-reducer'
import header from './header-reducer'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage : friendsReducer,
    header: header,
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store

export default store;