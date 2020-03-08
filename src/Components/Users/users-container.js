import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    getUsersByPageNumb,
    getUsers,
    isPreLoader
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../HOC/authRedirect";
import {compose} from "redux";
import {getUsersData} from "../../Redux/usersSelectors";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    getNumbOfPage = (page) => {
        this.props.getUsersByPageNumb(page, this.props.usersOnPage);
    }

    render() {

        return <>
            {this.props.isFeaching ? <Preloader/> : null}
            <Users totalUsers={this.props.totalUsers}
                   usersOnPage={this.props.usersOnPage}
                   getNumbOfPage={this.getNumbOfPage}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   isloged={this.props.isloged}
            />;
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        totalUsers: state.usersPage.totalUsers,
        usersOnPage: state.usersPage.usersOnPage,
        currentPage: state.usersPage.currentPage,
        isFeaching: state.usersPage.isFeaching,
        isloged: state.loginPage.isloged
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        getUsersByPageNumb,
        isPreLoader
    }),
    withAuthRedirect
)(UsersComponent);