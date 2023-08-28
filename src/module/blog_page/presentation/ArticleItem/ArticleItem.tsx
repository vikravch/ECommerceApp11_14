import React from 'react';
import style from "./ArticleItem.module.css";
import {routes} from "../../../../general/navigation/routes";

const ArticleItem: React.FC<any> = (props) => {
    let title = props.title.toString().replace(/\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/g, '');

    return (
        <div className={style.articleItem}>
            <div className={style.blog} >
                <div>
                    <a href={`/${routes.articlePage}/${props.id}`} className={'text-decoration-none text-black'}>
                        <img src={props.img} alt="Blog"/>
                        <h5>{title}</h5>
                        <div className={style.clock}>
                            <b>&#x1F552; {props.date}</b>
                        </div>
                    </a>
                </div>
            </div>
        </div>

);
};

export default ArticleItem;
