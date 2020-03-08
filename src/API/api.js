import * as axios from "axios";

const serv = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '2455aaf3-a249-4990-aaea-b3c0a070db5f'}
})

export const getUser1pServ = () => {
    return serv.get(`users?page=1`)
}

export const getUserpageServ = (page, usersOnPage) => {
    return serv.get(`users?page=${page}&count=${usersOnPage}`)
}

export const unfollowServ = (id) => {
    return serv.delete(`follow/${id}`)
}

export const followServ = (id) => {
    return serv.post(`follow/${id}`)
}

export const openProfile = (id) => {
    return serv.get(`profile/${id}`)
}

export const logServ = () => {
    return serv.get(`auth/me`);
}

export const loginServ = (email, password, rememberMe, captcha) => {
    return serv.post(`auth/login`, {email, password, rememberMe, captcha});
}

export const logoutServ = () => {
    return serv.delete(`auth/login`);
}

export const getStatusApi = (id) => {
    return serv.get(`profile/status/${id}`)
}

export const setStatusApi = (status) => {
    return serv.put(`profile/status`, {status: status})
}

export const changePhotoApi = (photo) => {
    const formData = new FormData();
    formData.append('image', photo);
    return serv.put(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getCaptchaApi = () => {
    return serv.get(`security/get-captcha-url`);
}

export const saveProfileApi = (profile) => {
    return serv.put(`profile/`, profile);
}