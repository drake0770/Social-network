import {isLogedThunk} from "./login-reducer";

const INITIALIZE = 'initialize';

const initionalState={
    isInic: false
}

export const appReducer=( state = initionalState, action )=>{
    switch (action.type) {
        case INITIALIZE :
            return{
                ...state,
                isInic: action.isInic
            }
        default: return state;
    }
}

export const init=()=>{
    return{type: INITIALIZE, isInic:true}
}

export const initialize=()=>(dispatch)=>{
    let promise = dispatch(isLogedThunk());
    promise.then(()=>{dispatch(init())});
}