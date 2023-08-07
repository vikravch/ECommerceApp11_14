import React, {useEffect} from 'react';
import style from './BlogPage.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";
import {useDispatch, useSelector} from "react-redux";
import ArticleInfo from "../domain/model/ArticlesList";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction, getHearersListAction, setBlogPaginationPage} from "../redux/asyncActions";
import formatDate from "../dateTransformer";
import BlogHeaders from "./BlogHeaders";
import HeadersList from "../domain/model/HeadersList";
import styles from "../../landing_page/styles/blog.module.scss";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";

const BlogPage: React.FC = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)
    //TODO change state to headersList
    const headersList = useSelector<Store, Array<HeadersList>>(state => state.blogPage.headersList)
    const currentPage = useSelector<Store, number>(state => state.blogPage.currentPage);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesListAction(currentPage));
        dispatch(getHearersListAction())
    }, [currentPage]);


    return (
        <div className={style.wrapper}>
            <div className={'row'}>
                <p className={style.breadcrumbs}>Main / Blog </p>
            </div>
            <div>
                <BlogHeaders data={headersList}/></div>
            <div className={styles.container}>
                <h1 className={styles.h1}>Blog</h1>
                <div className={styles.blog_items}>
                    {articlesList.map((item) => (
                        <ArticleItem title={item.title} key={item.id} id={item.id} date={formatDate(item.timestampDateMod)} />
                    ))}
                </div>

            </div>
            <Pagination data={paginationData} currentPage={currentPage} setCurrentPage={
                (page: number) => {
                    dispatch(setBlogPaginationPage(page))
                }
            }/>
        </div>
    );
};

export default BlogPage;
