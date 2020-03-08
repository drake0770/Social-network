import React from "react";
import c from './Notes.module.css';

const Notes = (props) => {

    return (
        <div className={c.notes}>
            <div className={c.note}>
                {props.text}
            </div>
        </div>
    );
}

export default Notes;