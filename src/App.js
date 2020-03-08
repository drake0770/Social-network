import React, {Component} from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import HeaderConnect from "./Components/Header/header-container";
import Login from "./Components/Login/login";
import {connect} from "react-redux";
import {initialize} from "./Redux/app-reducer";
import {compose} from "redux";
import Preloader from "./Components/Common/Preloader";
import {withSuspense} from "./HOC/withSuspense";

const MessagesContainer = React.lazy(() => import ('./Components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'));
const usersComponent = React.lazy(() => import ('./Components/Users/users-container'));


class App extends Component {
    catchAllUncatchedErrors = (reason, promise) => {
        alert('some error');
    }

    componentDidMount() {
        this.props.initialize();
        window.addEventListener('type', this.catchAllUncatchedErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('type', this.catchAllUncatchedErrors);
    }

    render() {
        {
            if (!this.props.isInic)
                return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderConnect/>
                <Sidebar/>
                <div>
                    <Route path='/messages' component={withSuspense(MessagesContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/users' component={withSuspense(usersComponent)}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInic: state.app.isInic
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);
