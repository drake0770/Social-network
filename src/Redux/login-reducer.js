import {getCaptchaApi, loginServ, logoutServ, logServ} from "../API/api";
import {stopSubmit} from "redux-form";

const SETUSERSDATA1 = 'login';
const CAPTCHA = 'captcha'

let initionalState = {
    userId: null,
    email: null,
    login: null,
    isloged: null,
    captcha: null

}

export const loginReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SETUSERSDATA1:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isloged: action.isloged
            }
        case CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

export const setUsersData = (userId, email, login, isloged) => {
    return {type: SETUSERSDATA1, userId, email, login, isloged}
}

const getCaptchaURL = (captcha) => {
    return {type: CAPTCHA, captcha};
}

export const isLogedThunk = () => async (dispatch) => {
    let response = await logServ();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(response.data.data.id, response.data.data.email, response.data.data.login, true));
    }
}

export const loginRequest = (email, password, rememberMe, captchaField) => async (dispatch) => {
    let response = await loginServ(email, password, rememberMe, captchaField);
    if (response.data.resultCode === 0) {
        dispatch(isLogedThunk());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        let mess = response.data.messages.length > 0 ? response.data.messages[0] : 'Wrong data';
        dispatch(stopSubmit('login', {_error: mess}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await logoutServ();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false));
    }
}

export const getCaptcha = () => async (disatch) => {
    let response = await getCaptchaApi();
    disatch(getCaptchaURL(response.data.url));
}

