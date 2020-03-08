import MyPosts from "./MyPosts";
import {onPostAdd} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onPostAdd: (text) => {
            dispatch(onPostAdd(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;