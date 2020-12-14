const NEW_MESSAGE = 'NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

const messagesReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE: 
            let body = state.newMessageText
            state.newMessageText = "";
            state.messagesData.forEach(dialog => {
            if(dialog.id === action.id) {
                dialog.message.push(body)
            }
            });
            return state;
        case NEW_MESSAGE: 
            state.newMessageText = action.text;
            return state;
        default: return state;
    }
}
export const sendMessageActionCreator = (text,id) => ({type: SEND_MESSAGE, newMessage: text, id: id})
export const changeMessageActionCreator = (text,id) => ({type: NEW_MESSAGE, text: text, id: id})

export default messagesReducer;
