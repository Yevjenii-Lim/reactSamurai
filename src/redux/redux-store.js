import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profile-reduce'
import messagesReducer from './messages-reduce'
import friendsReducer from './friends-reducer'
import header from './header-reducer'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage : friendsReducer,
    header: header,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store

export default store;