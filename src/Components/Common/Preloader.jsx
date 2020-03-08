import React from "react";
import loader from '../../image/loader.gif';
import c from './preloader.module.css';

const Preloader = () => {
    return <div className={c.body}>
        <img className={c.img} alt={'Loading...'} src={loader}/>
    </div>

}
export default Preloader;