import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getStatus, updateStatus, changePhoto, updateProfileData} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/authRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    uploadProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.openProfileById(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.uploadProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.uploadProfile();
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} saveProfileData={this.props.saveProfileData}
                     changePhoto={this.props.changePhoto}
                     isLoged={!this.props.match.params.userId} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.loginPage.userId
    }
};
export default compose(
    withRouter,
    connect(mapStateToProps, {openProfileById: getProfileData, getStatus, updateStatus, changePhoto, saveProfileData: updateProfileData}),
    withAuthRedirect
)(ProfileContainer);

