import React from "react";
import c from './ProfInfo.module.css';

export const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>Full Name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Loking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>Job description:</b> {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <br></br>
                <b>Contacts:</b>
            </div>
            <div>
                <b>Facebook:</b> {props.profile.contacts.facebook}
            </div>
            <div>
                <b>Web site:</b> {props.profile.contacts.website}
            </div>
            <div>
                <b>Vk:</b> {props.profile.contacts.vk}
            </div>
            <div>
                <b>Twitter:</b> {props.profile.contacts.twitter}
            </div>
            <div>
                <b>Instagram:</b> {props.profile.contacts.instagram}
            </div>
            <div>
                <b>Youtube:</b> {props.profile.contacts.youtube}
            </div>
            <div>
                <b>GitHub:</b> {props.profile.contacts.github}
            </div>
            <div>
                <b>Mail:</b> {props.profile.contacts.mainLink}
            </div>
            {props.isLoged && <button onClick={props.activateEditMode}>Edit profile data</button>}
        </div>
    );
}