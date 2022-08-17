import React from 'react';
import style from './Blog.module.css'
import ArticleItem from "./Article/ArticleItem";
import {articlesInfo} from "../../../consts";

const BlogPage = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.big_text}>
                <div className={style.divider}></div>
                <div className={style.divider_horizontal}></div>
                <div className={style.big_text_header}>LEARNING TO LOVE YOUR MENTAL HEALTH JOURNEY</div>
                <button className={style.btn_read_more}>Read More</button>
            </div>
            <div>
                <div className={style.articles_wrapper}>{articlesInfo.ArticleBaseInfo.map((item) =>
                    <ArticleItem title={item.title} key={item.id} date={item.dateModified}/>)}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;