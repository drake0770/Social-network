import React from "react";
import c from './messages.module.css';
import Senders from "./Senders/Senders";
import Notes from "./Notes/Notes";
import {Field, reduxForm} from 'redux-form';
import {emptyField, maxLength} from "../../utils/validators/validators";
import {Textarea} from "../Common/Elements";

const Messages = (props) => {

    const onSubmit = (formObj) => {
        props.newMess(formObj.textareamessage);
    }

    let notesarray2 = props.notesarray.map(el => <Notes id={el.id} text={el.text}/>);

    return (
        <div className={c.messages}>
            <div>
                <Senders sendersarray={props.sendersarray}/>
            </div>
            <div>
                {notesarray2}
                <div>
                    <NewMessageForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

const overSize10 = maxLength(10);

const NewMessage = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <Field name={'textareamessage'} placeholder={'New message'} component={Textarea} validate={[emptyField, overSize10]} />
            <button>Send</button>
            </form>
        </div>
    );
}

const NewMessageForm = reduxForm({
    form: 'message'
})(NewMessage);

export default Messages;