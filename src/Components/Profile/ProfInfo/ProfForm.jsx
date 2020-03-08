import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/Elements";
import React from "react";


const ProfForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {props.error && <div> {props.error} </div>}
                <div>
                    <b>Full Name:</b> <Field name={'fullName'} component={Input}/>
                </div>
                <div>
                    <b>About me:</b> <Field name={'aboutMe'} component={Input}/>
                </div>
                <div>
                    <b>Loking for a job:</b> <Field name={'lookingForAJob'} component={'input'} type={'checkbox'}/>
                </div>
                <div>
                    <b>Job description:</b> <Field name={'lookingForAJobDescription'} component={Input}/>
                </div>
                <div>
                    <br></br>
                    <b>Contacts:</b>
                </div>
                <div>
                    <b>Facebook:</b> <Field name={'contacts.facebook'} component={Input}/>
                </div>
                <div>
                    <b>Web site:</b> <Field name={'contacts.website'} component={Input}/>
                </div>
                <div>
                    <b>Vk:</b> <Field name={'contacts.vk'} component={Input}/>
                </div>
                <div>
                    <b>Twitter:</b> <Field name={'contacts.twitter'} component={Input}/>
                </div>
                <div>
                    <b>Instagram:</b> <Field name={'instagram'} component={Input}/>
                </div>
                <div>
                    <b>Youtube:</b> <Field name={'contacts.youtube'} component={Input}/>
                </div>
                <div>
                    <b>GitHub:</b> <Field name={'contacts.github'} component={Input}/>
                </div>
                <div>
                    <b>Mail:</b> <Field name={'contacts.mainLink'} component={Input}/>
                </div>
                <button>Save</button>

            </form>

        </div>);
}

export const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfForm);
