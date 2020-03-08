import React, {useState} from "react";
import c from './pageChanger.module.css';

const PageChanger = (props) => {
    const pagesAmount = Math.ceil(props.totalUsers / props.usersOnPage);
    const pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }
    const sectionsAmount = pagesAmount / 10;
    let [sectionNumber, setSectionNumber] = useState(1);
    let min = sectionNumber * 10 - 10;
    let max = sectionNumber * 10 + 1;

    return (<div className={c.body}>
        {
            sectionNumber > 1 ?
                <div>
                    <span className={c.but} onClick={() => {
                        setSectionNumber(--sectionNumber);
                        props.getNumbOfPage(sectionNumber * 10 - 9);
                    }}> {'<'}
                    </span>
                </div> : null
        }
        {
            pages.filter(p => p > min && p < max).map((p) => {
                    return <div className={c.page}><span
                        onClick={() => {
                            props.getNumbOfPage(p)
                        }}
                        className={`${props.currentPage === p && c.active} ${c.spans} `}>{p}</span></div>
                }
            )}
        {
            sectionNumber < sectionsAmount ?
                <div> <span onClick={() => {
                    setSectionNumber(++sectionNumber);
                    props.getNumbOfPage(sectionNumber * 10 - 9);
                }} className={c.but}>{'>'}</span></div> : null
        }
    </div>);
}

export default PageChanger;