const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "here could be your message 1" },
    { id: 2, message: "here could be your message 2" },
    { id: 3, message: "here could be your message 3" },
    { id: 4, message: "here could be your message 4" },
    { id: 5, message: "here could be your message 5" }
  ],
  dialogsData: [
    { id: 1, name: "Sabir" },
    { id: 2, name: "Adil" },
    { id: 3, name: "Lala" },
    { id: 4, name: "Sarxan" },
    { id: 5, name: "Vuqar" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        newMessageBody: "",
        messagesData: [
          ...state.messagesData,
          {
            id: state.messagesData[state.messagesData.length - 1].id + 1,
            message: state.newMessageBody
          }
        ]
        // dialogsData: [...state.dialogsData]  dialogs menat ne budem
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const updateNewMessageBodyCreator = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
