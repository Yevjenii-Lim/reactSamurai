import {combineReducers, createStore} from "redux";
import profileReducer from './profile-reduce'
import messagesReducer from './messages-reduce'
import friendsReducer from './friends-reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage : friendsReducer,
})
let store = createStore(reducers);

export default store;