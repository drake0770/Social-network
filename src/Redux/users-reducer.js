import {followServ, getUser1pServ, getUserpageServ, unfollowServ} from "../API/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unFollow';
const SETUSERS = 'setUsers';
const CHANGEPAGE = 'changePage';
const SETTOTALUSERS = 'setTotalUsers';
const PRELOADER = 'preLoader';

let initionalState = {
    users: [],
    totalUsers: 200,
    usersOnPage: 10,
    currentPage: 1,
    isFeaching: true
}

export let usersReducer = (state = initionalState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    (u) => {
                        if (action.userID === u.id) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (action.userID === u.id) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
        case CHANGEPAGE:
            return {
                ...state,
                users: [...state.users],
                currentPage: action.page
            }
        case SETTOTALUSERS:
            return {
                ...state,
                users: [...state.users],
                totalUsers: action.totalCount
            }
        case PRELOADER:
            return {
                ...state,
                isFeaching: action.isFeaching
            }
        default:
            return state;
    }
}

export const onFollow = (userID) => {
    return {type: FOLLOW, userID}
}
export const onUnFollow = (userID) => {
    return {type: UNFOLLOW, userID}
}
export const setUsers = (users) => {
    return {type: SETUSERS, users}
}
export const onPageChange = (page) => {
    return {type: CHANGEPAGE, page}
}
export const setTotalUsers = (totalCount) => {
    return {type: SETTOTALUSERS, totalCount}
}
export const isPreLoader = (isFeaching) => {
    return {type: PRELOADER, isFeaching}
}


export const getUsers = () => async (dispatch) => {
    dispatch(isPreLoader(true));
    let response = await getUser1pServ();
    dispatch(isPreLoader(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsers(response.data.totalCount));

}

export const getUsersByPageNumb = (page, usersOnPage) => async (dispatch) => {
    dispatch(onPageChange(page));
    dispatch(isPreLoader(true));
    let response = await getUserpageServ(page, usersOnPage);
    dispatch(isPreLoader(false));
    dispatch(setUsers(response.data.items))
}

export const unfollow = (id) => async (dispatch) => {
    let response = await unfollowServ(id);
    if (response.data.resultCode === 0) {
        dispatch(onUnFollow(id));
    }
}

export const follow = (id) => async (dispatch) => {
    let response = await followServ(id);
    if (response.data.resultCode === 0) {
        dispatch(onFollow(id));
    }
}