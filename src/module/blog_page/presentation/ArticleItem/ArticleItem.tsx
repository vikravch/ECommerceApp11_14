import React from 'react';
import style from "./ArticleItem.module.css";
import {Link} from "react-router-dom";
import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";

const ArticleItem: React.FC<any> = (props) => {

    return (
        <div>
            <Link className={style.link} to={`/article/${props.id}`}>
        <div className={style.article} onClick={getArticleDetailsAction(props.id)}>
            <div className={style.article_item_img_div}>
                <img alt={'img'} src={"#"} className={style.article_item_img}>{props.img}</img>
            </div>
            <div className={style.article_title}>
                <h3>{props.title}</h3>
            </div>
            <div className={style.article_date}>
                <div>{props.date}</div>
            </div>
        </div>
            </Link>
        </div>
    );
};

export default ArticleItem;
