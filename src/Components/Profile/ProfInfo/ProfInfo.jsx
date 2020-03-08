import React, {useState} from "react";
import c from './ProfInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ava from '../../../image/ava.jpg'
import {ProfileReduxForm} from "./ProfForm";
import {ProfileData} from "./ProfileData";

const ProfInfo = (props) => {
    const [editMode, setEdit] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const uploadPhoto = (e) => {
        props.changePhoto(e.target.files[0]);
    }
    const onSubmit = (formData) => {
        props.saveProfileData(formData);
        setEdit(false);
    }
    return (
        <div className={c.info}>
            <div><img alt={'img'} className={c.img} src={props.profile.photos.large || ava}/></div>

            <div><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
            <div className={c.profdata}>
            {editMode ? <ProfileReduxForm onSubmit={onSubmit} initialValues={props.profile}/> :
                <ProfileData activateEditMode={() => setEdit(true)} profile={props.profile} isLoged={props.isLoged}/>}
            <b>Change main photo: </b> {props.isLoged && <input type={'file'}  onChange={uploadPhoto}/>}
            </div>
        </div>
    );
}
export default ProfInfo;