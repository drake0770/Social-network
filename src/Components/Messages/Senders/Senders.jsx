import React from "react";
import c from './Senders.module.css';
import {NavLink} from "react-router-dom";

const Senders =(props) =>{
    let sendersarray = props.sendersarray.map(el=> <div className={c.sender}>  <NavLink to = { '/messages/' + el.id}>{el.sender}</NavLink></div>);
     return(
      <div className={c.senders}>
            <div>
                {sendersarray}
            </div>

      </div>
    );
}

export default Senders;