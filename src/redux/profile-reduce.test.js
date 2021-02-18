import profileReducer, { addPostActionCreator } from "./profile-reduce"


it('add new postr', () => {
  let action = addPostActionCreator('hello');
  let state = {
    postsData: [
      { id: 1, message: "hello", like: 12 },
      { id: 2, message: "How you doing", like: 1 },
    ],
    newPostText: "new Post",
    profileData: null,
    status: ''
}
let newState = profileReducer(state, action)
expect(newState.postsData.length).toBe(5);
})