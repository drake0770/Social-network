import React from "react";
import c from './Post.module.css';
import like from '../../../../image/like.png'


const Post = (props) => {
    return (
        <div>
            <div className={c.post}>
                <div>
                    {props.text}
                </div>
                <div className={c.likesblok}>
                    <div>
                 <span className={c.butlike}>
                     <img className={c.likeimg} alt ={'img'} src={like}/>
                 </span>
                    </div>
                    <div className={c.like}>
                        likes: {props.likescount}
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Post;