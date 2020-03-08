import {newMessSend} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/authRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        notesarray: state.messagePage.notesarray,
        sendersarray: state.messagePage.sendersarray,
        isloged: state.loginPage.isloged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMess: (text) => {
            dispatch(newMessSend(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);