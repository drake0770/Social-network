import React from "react";
import c from './sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className={c.sidebar}>
            <div className={c.nav}>
                <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.nav}>
                <NavLink to='/messages' activeClassName={c.active}>Messages </NavLink>
            </div>
            <div className={c.nav}>
                <NavLink to='/users' activeClassName={c.active}>Users </NavLink>
            </div>

        </div>
    );

}
export default Sidebar;