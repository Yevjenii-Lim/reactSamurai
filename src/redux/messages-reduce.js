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
        newMessageText: ' ',
}

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE: {
       
          if(state.newMessageText.length > 1) {
            let body = state.newMessageText;
            // stateCopy.messagesData = [...state.messagesData]
         
            // for(let i = 0; i < state.messagesData.length; i++) {
            //   stateCopy.messagesData[i] = {...state.messagesData[i]}
       
            // }
            // console.log(state.messagesData === initialState.messagesData)
            state.messagesData.forEach(dialog => {
            if(dialog.id === action.id) {
                dialog.message.push(body)
            }
          
            });
        
            return {...state,
              messagesData: [...state.messagesData,],
              newMessageText: "",
            }
          }else {
            return state
          }
        }
           
        case NEW_MESSAGE: 
   
          return {
            ...state,
            newMessageText: action.text,
          }
       
        
        default: return state;
    }
}
export const sendMessageActionCreator = (text,id) => ({type: SEND_MESSAGE, newMessage: text, id: id})
export const changeMessageActionCreator = (text,id) => ({type: NEW_MESSAGE, text: text, id: id})

export default messagesReducer;
