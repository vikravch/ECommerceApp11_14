import React, {useEffect, useRef} from 'react';
import style from './BlogPage.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";
import {useDispatch, useSelector} from "react-redux";
import ArticleInfo from "../domain/model/ArticlesList";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction, getHearersListAction, setBlogPaginationPage} from "../redux/asyncActions";
import formatDate from "../dateTransformer";
import BlogHeaders from "./BlogHeaders";
import styles from "../../landing_page/styles/blog.module.scss";
import Pagination from "../../pagination/Pagination";
import {PaginationData} from "../../../general/dto/APIResponseTypes";

const BlogPage: React.FC = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)
    const pageData = useSelector<Store, PaginationData>(state => state.blogPage.pageData)
    const currentPage = useSelector<Store, number>(state => state.blogPage.currentPage);
    const blogH1Ref = useRef<null | HTMLDivElement>(null);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHearersListAction())
        dispatch(getArticlesListAction(currentPage));
    }, [currentPage]);

    useEffect(() => {
        if (currentPage > 0 && blogH1Ref.current) {
            blogH1Ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [articlesList]);

    return (
        <div className={style.wrapper}>
            <div className={'container p-0'}>
                <p className={style.main}>Main / <span className={'black'}>Blog</span></p>
            </div>
            <div>
                <BlogHeaders/></div>
            <div className={styles.container}>
                <h1 className={styles.h1} ref={blogH1Ref}>Blog</h1>
                <div className={styles.blog_items}>
                    {articlesList.map((item) => (
                        <ArticleItem img={item.thumbImgUrl} title={item.title} key={item.id} id={item.id} date={formatDate(item.timestampDateMod)} />
                    ))}
                </div>

            </div>
            <Pagination data={pageData} currentPage={currentPage} setCurrentPage={
                (page: number) => {
                    dispatch(setBlogPaginationPage(page))
                }
            }/>
        </div>
    );
};

export default BlogPage;
