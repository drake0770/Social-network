const ONMESSSEND = 'onMessSend';

let initionalState = {
    sendersarray: [
        {id: 1, sender: 'Igor'},
        {id: 2, sender: 'Dmytro'},
        {id: 3, sender: 'Oleg'}
    ],
    notesarray: [
        {id: 1, text: 'Hi. How are you?'},
        {id: 2, text: 'I do not like it.'},
        {id: 3, text: 'Yes'}
    ]
};

export const messagesReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ONMESSSEND:
            return {
                ...state,
                notesarray: [...state.notesarray, {id: 4, text: action.text}]
            };
        default:
            return state;
    }
}

export const newMessSend = (text) => {
    return {type: ONMESSSEND, text: text};
}


