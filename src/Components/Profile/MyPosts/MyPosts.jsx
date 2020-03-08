import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';
import {Textarea} from "../../Common/Elements";
import {emptyField, maxLength} from "../../../utils/validators/validators";

const MyPosts = (props) => {

    let postelem = props.posts.map(el => <Post key={el.id} id={el.id} text={el.text} likescount={el.likescount}/>);

    let onSubmit = (formObj) => {
        props.onPostAdd(formObj.newPostText);
    }

    return (
        <div className={c.myPosts}>
            <div className={c.newPost}>
                <div className={c.text}>
                    <b>My posts:</b>
                </div>
                <div><NewPostFormRedux onSubmit={onSubmit}/></div>
            </div>
            <div>   {postelem}</div>
        </div>
    );
}

const overSize100 = maxLength(100);

const NewPostForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPostText'} component={Textarea} validate={[emptyField, overSize100]}
                       placeholder={'New post'}/>
                <button className={c.but}>Add new post</button>

            </form>
        </div>
    );
}

const NewPostFormRedux = reduxForm(
    {
        form: 'newPost'
    }
)(NewPostForm);

export default MyPosts;