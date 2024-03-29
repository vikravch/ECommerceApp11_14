import React, {useEffect} from 'react';
import styles from "../styles/blog.module.scss";
import ArticleItem from "../../blog_page/presentation/ArticleItem/ArticleItem";
import ArticleInfo from "../../blog_page/domain/model/ArticlesList";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction} from "../../blog_page/redux/asyncActions";

const Blog = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesListAction(1));
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>Blog</h1>
                <div className={styles.blog_items}>
                    {articlesList.slice(0, 3).map((item) => (
                        <ArticleItem img={item.thumbImgUrl} title={item.title} key={item.id} id={item.id} date={item.timestampDateMod} />
                    ))}
                </div>

            </div>
        </div>

    );
};

export default Blog;