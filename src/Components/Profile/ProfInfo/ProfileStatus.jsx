import React, {useEffect, useState} from "react";
import c from './ProfInfo.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => setStatus(props.status), [props.status]);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const disactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const newStatus = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={c.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>   {props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={newStatus} autoFocus={true} onBlur={disactivateEditMode} value={status}/>
            </div>
            }
        </div>
    );
}
export default ProfileStatus;