const NEW_MESSAGE = 'NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {

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
