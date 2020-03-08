import React from "react";
import LoginReduxForm from "./form";
import {connect} from "react-redux";
import {loginRequest} from "../../Redux/login-reducer";
import {Redirect} from "react-router-dom";
import c from './login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginRequest(formData.email, formData.password, formData.rememberMe, formData.captchaField)
        return <Redirect to={'/profile'}/>
    }

    if (props.isloged) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={c.form}>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isloged: state.loginPage.isloged,
        captcha: state.loginPage.captcha
    }
}
export default connect(mapStateToProps, {loginRequest})(Login);