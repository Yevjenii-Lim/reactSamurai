const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const ADD_POST = "ADD_POST"

let initialState = {
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

}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
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
        default: return state
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST,})

export let newPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export default profileReducer;