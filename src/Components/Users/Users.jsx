import React from "react";
import c from './users.module.css';
import ava from '../../image/ava.jpg';
import {NavLink} from "react-router-dom";
import PageChanger from "../Common/Pagechanger";

const Users = (props) => {
    return (
        <div className={c.users}>
            <PageChanger totalUsers={props.totalUsers} usersOnPage={props.usersOnPage}
                         currentPage={props.currentPage} getNumbOfPage={props.getNumbOfPage}/>
            {
                props.users.map((u) => <div key={u.id} className={c.user}>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : ava} alt ={'img'} className={c.ava}/>
                        </NavLink>
                    </div>
                    <div className={c.desc}>
                     <div>{u.name} </div>
                        <div> {u.status} </div>
                        <div>
                            {u.followed ?
                                <button className={c.but} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow
                                </button>
                                :
                                <button className={c.but} onClick={() => {
                                                      props.follow(u.id);
                                }}>Follow
                                </button>
                            }
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
}

export default Users;