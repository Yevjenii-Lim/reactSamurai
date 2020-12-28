import {combineReducers, createStore} from "redux";
import profileReducer from './profile-reduce'
import messagesReducer from './messages-reduce'
import friendsReducer from './friends-reducer'
import header from './header-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage : friendsReducer,
    header: header
})
let store = createStore(reducers);

window.store = store

export default store;