import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
        isloged: state.loginPage.isloged
    }
}

export const withAuthRedirect=(Component)=>{
    const RedirectComponent=(props)=> {
        if (!props.isloged) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...props}/>
    }
    const RedirectedComponent=connect(mapStateToProps,{})(RedirectComponent);
    return RedirectedComponent;
}

