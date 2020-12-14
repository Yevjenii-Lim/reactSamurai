const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const ADD_POST = "ADD_POST"

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0,
            };
            state.newPostText = "";
            state.postsData.push(newPost);
            return state;
        case UPDATE_NEW_POST: 
            state.newPostText = action.newText;
            return state;
        default: return state
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST,})

export let newPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export default profileReducer;