import {changePhotoApi, getStatusApi, openProfile, saveProfileApi, setStatusApi} from "../API/api";
import {stopSubmit} from "redux-form";

const ADDPOST = 'addPost';
const SETPROFILEUSER = 'setProfileUser';
const SETSTATUS = 'setStatus';
const ADDNEWPHOTO = 'addNewPhoto'

let initionalState = {
    posts: [
        {id: 1, text: 'What a nice day', likescount: 58},
        {id: 2, text: 'I am fine', likescount: 41},
        {id: 3, text: 'Hello everybody', likescount: 34}
    ],
    profile: null,
    status: null
};

export const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADDPOST:
            let newel = {id: 4, text: action.text, likescount: 0};
            return {
                ...state,
                posts: [...state.posts, newel]
            };
        case SETPROFILEUSER:
            return {
                ...state,
                profile: action.data
            }
        case SETSTATUS:
            return {
                ...state,
                status: action.status
            }
        case ADDNEWPHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        default:
            return state;
    }
}

export const onPostAdd = (text) => {
    return {type: ADDPOST, text: text};
}

export const getProfileUser = (data) => {
    return {type: SETPROFILEUSER, data};
}
export const setStatus = (status) => {
    return {type: SETSTATUS, status};
}

export const addPhoto = (photo) => {
    return {type: ADDNEWPHOTO, photo};
}

export const getProfileData = (id) => async (dispatch) => {
    let response = await openProfile(id);
    dispatch(getProfileUser(response.data));

}
export const getStatus = (id) => async (dispatch) => {
    let response = await getStatusApi(id);
    dispatch(setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await setStatusApi(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}
export const changePhoto = (photo) => async (dispatch) => {
    let response = await changePhotoApi(photo);
    if (response.data.resultCode === 0) {
        dispatch(addPhoto(response.data.data.photos))
    }
}

export const updateProfileData = (profile) => async (dispatch, getState) => {
    let userId = getState().loginPage.userId;
    let response = await saveProfileApi(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileData(userId));
    } else {
        dispatch(stopSubmit('profile', {_error: response.data.messages[0]}));
    }
}

