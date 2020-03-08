import React from "react";
import c from './profile.module.css';
import ProfInfo from "./ProfInfo/ProfInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={c.profile}>
            <ProfInfo profile={props.profile} saveProfileData={props.saveProfileData} changePhoto={props.changePhoto}
                      isLoged={props.isLoged} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;