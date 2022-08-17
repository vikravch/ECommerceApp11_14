import React from 'react';
import style from "./ArticleItem.module.css";

const ArticleItem = (props) => {
    return (
        <div className={style.article}>
            <h2>{props.title}</h2>
            <span>{props.date}</span>
        </div>
    );
};

export default ArticleItem;