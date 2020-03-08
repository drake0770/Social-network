import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../Common/Elements";
import {emptyField, maxLength} from "../../utils/validators/validators";
import c from './../Common/elements.module.css';

const overSize30 = maxLength(30);

const Form = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} placeholder={'Login'} component={Input} validate={[emptyField, overSize30]}/>
            </div>
            <div><Field name={'password'} placeholder={'Password'} component={Input}
                        validate={[emptyField]} type={'Password'}/></div>
            <div><Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me</div>
            <div className={c.errorData}>{props.error}</div>
            {props.captcha && <img alt={'captcha'} src={props.captcha}/>}
            {props.captcha && <Field name={'captchaField'} placeholder={'Please insert captcha'} component={Input}/>}
            <div>
                <button className={c.but}>Login</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(Form);

export default LoginReduxForm;