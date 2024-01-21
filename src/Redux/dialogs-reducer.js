const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Yoo' },
        { id: 4, message: 'Yoo' },
        { id: 5, message: 'Yoo' },
        { id: 6, message: 'Yoo' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;