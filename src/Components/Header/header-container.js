import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {isLogedThunk, logout} from "../../Redux/login-reducer";

class headerContainer extends React.Component {

    render() {
        return <Header isloged={this.props.isloged} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isloged: state.loginPage.isloged
    }
}

let HeaderConnect = connect(mapStateToProps, {logme: isLogedThunk, logout})(headerContainer);

export default HeaderConnect;