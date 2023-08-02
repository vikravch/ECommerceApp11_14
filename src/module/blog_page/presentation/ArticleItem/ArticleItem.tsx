import React from 'react';
import style from "./ArticleItem.module.css";
import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";

const ArticleItem: React.FC<any> = (props) => {

    return (
<div>
    <div className={style.blog} onClick={getArticleDetailsAction(props.id)}>
        <div >
            <img width={410} height={270} src={props.img} alt="Blog"/>
            <h5>{props.title}</h5>

            <div className={style.clock}>
                <b>{props.date}</b>
            </div>
        </div>
    </div>
</div>

    );
};

export default ArticleItem;
