import React from "react";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

let store = {
    state: {
        messagePage: {
            sendersarray: [
                {id: 1, sender: 'sender1'},
                {id: 2, sender: 'sender2'},
                {id: 3, sender: 'sender3'}
            ],
            notesarray: [
                {id: 1, text: 'aaaa'},
                {id: 2, text: 'aaaa'},
                {id: 3, text: 'aaaa'}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, text: 'aaaa', likescount: 5},
                {id: 2, text: 'aaaa', likescount: 5},
                {id: 3, text: 'aaaa', likescount: 5}
            ],
            newText: ''
        }

    },

    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.messagePage = messagesReducer(this.state.messagePage, action);
        this.Rerender();
    },
    getState() {
        return this.state;
    },
    Rerender() {
    },
    subscribe(observer) {
        this.Rerender = observer;
    }
};


export default store;







