
// let persons = fetch('https://jsonplaceholder.typicode.com/users')
// .then(responce => responce.json())
// .then(json => console.log(json))

import { act } from "react-dom/test-utils";
import frienndsReducer from "./friends-reducer";
import messagesReducer from "./messages-reduce";
import profileReducer from "./profile-reduce";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "hello", like: 12 },
        { id: 2, message: "How you doing", like: 1 },
      ],
      newPostText: "new Post",
      profileData: {
        srcBg:
          "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/nature-photography/desktop/nature_P2a_720x350.jpg.img.jpg",
        avatar: "https://html5css.ru/w3css/img_avatar3.png",
      },
    },
    messagesPage: {
      dialogData: [
        {
          id: 1,
          name: "dmitry",
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 2,
          name: "Valera",
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 3,
          name: "Natasha",
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 4,
          name: "Zheny",
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
      ],
      messagesData: [
        {
          id: 1,
          message: ["hi", 'how'],
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 2,
          message: ["Whats up"],
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 3,
          message: ["With it"],
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
        {
          id: 4,
          message: ["Vanila face"],
          avatar:
            "https://i.etsystatic.com/9193132/r/il/116813/2029155707/il_794xN.2029155707_7hxm.jpg",
        },
      ],
      newMessageText: '',
    },
    friendsPage: {
      friend: [
        {
          src: "https://avatarko.ru/img/kartinka/1/voin_ninja.jpg",
          name: "John",
        },
        {
          src: "https://avatarko.ru/img/kartinka/1/voin_ninja.jpg",
          name: "John",
        },
        {
          src: "https://avatarko.ru/img/kartinka/1/voin_ninja.jpg",
          name: "John",
        },
      ],
    },
  },
  _render() {
    console.log('asa')
  },
  getState() {
    return this._state
  },

  subscriber(obs) {
    this._render = obs;
  },


  dispatch(action) {

    this._state.profilePage =  profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.friendsPage = frienndsReducer(this._state.friendsPage, action)

    this._render(this._state)
  
  }
 
}



export default store;

