import React, {useEffect} from 'react';
import style from './Blog.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";
import {useDispatch, useSelector} from "react-redux";
import ArticleInfo from "../domain/model/ArticlesList";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction} from "../redux/asyncActions";

const BlogPage:React.FC = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesListAction());
    }, []);

    function formatDate(inputDate: string) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        return `${day}.${month}.${year}`;
    }

    return (
        <div className={style.wrapper}>
            <div className={style.big_text}>
                <div className={style.divider}></div>
                <div className={style.big_text_article1}>
                    <h3>Join us at the Westchester in white plains, NY</h3>
                    <span>&#x1F552; 07.08.2020</span>
                </div>
                <div className={style.big_text_article2}>
                    <h3>Runners X Run For The Ocean</h3>
                    <span>&#x1F552; 07.08.2020</span>
                </div>
                <div className={style.big_text_article3}>
                    <h3>Mental and Physical Health Benefits of Yoga: Proven Results</h3>
                    <span>&#x1F552; 07.08.2020</span>
                </div>
                <div className={style.big_text_article4}>
                    <h3>Summer Sports - Summer Vibes</h3>
                    <span>&#x1F552; 07.08.2020</span>
                </div>
                <div className={style.divider_horizontal}></div>
                <div className={style.big_text_header}>LEARNING TO LOVE YOUR MENTAL HEALTH JOURNEY</div>
                <button className={style.btn_read_more}>Read More</button>
            </div>
            <div>
                <div className={style.articles_wrapper}>{articlesList.map((item) =>
                    <ArticleItem title={item.title} key={item.id} id={item.id} date={formatDate(item.timestampDateMod)}/>)}
                </div>
                <div className={style.pagination_position}>
                    <div className={style.pagination}>
                        <a href="#">&lt;</a>
                        <a className={style.active} href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&gt;</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogPage;

//articlesInfo.ArticleBaseInfo