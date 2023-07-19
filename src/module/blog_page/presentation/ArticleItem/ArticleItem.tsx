import React from 'react';
import style from "./ArticleItem.module.css";
import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";
import clock from "../../../landing_page/images/blog/clock.png";

const ArticleItem: React.FC<any> = (props) => {

    return (

        <div className={style.blog + ' col'} onClick={getArticleDetailsAction(props.id)}>
            <div className={style.link} >
                <img width={410} height={270} src={props.img} alt="Blog"/>

                <h5>{props.title}</h5>

                <div className={style.clock}>
                     <b>{props.date}</b>
                </div>
                </div>
        </div>
    );
};

export default ArticleItem;
