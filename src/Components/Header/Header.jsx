import React from "react";
import c from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={c.header}>
            <div>
                <p className={c.soc}>Social</p>
            </div>
            {!props.isloged ? <NavLink className={c.but} to={'/login'}> Login </NavLink> : (
                <span className={c.but} onClick={props.logout}> Logout</span>)}
        </div>
    );
}

export default Header;