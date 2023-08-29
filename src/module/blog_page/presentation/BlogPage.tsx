import React, {useEffect, useRef} from 'react';
import style from './BlogPage.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";
import {useDispatch, useSelector} from "react-redux";
import ArticleInfo from "../domain/model/ArticlesList";
import {Store} from "../../../general/redux/storeTypes";
import {
    cleanBlogDataAction,
    getArticlesListAction,
    getBlogDataAction,
    setBlogPaginationPage
} from "../redux/asyncActions";
import BlogHeaders from "./BlogHeaders/BlogHeaders";
import styles from "../../landing_page/styles/blog.module.scss";
import Pagination from "../../pagination/Pagination";
import {PaginationData} from "../../../general/dto/APIResponseTypes";
import Spinner from "../../spinner/Spinner";

const BlogPage: React.FC = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)
    const pageData = useSelector<Store, PaginationData>(state => state.blogPage.pageData)
    const currentPage = useSelector<Store, number>(state => state.blogPage.currentPage);
    const blogH1Ref = useRef<null|HTMLDivElement>(null);
    const isLoading = useSelector<Store, boolean>(state => state.blogPage.isLoading);
    const headers = useSelector<Store, Array<any>>(state => state.blogPage.headersList);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogDataAction(currentPage));
    }, []);

    useEffect(() => {
        if(headers.length > 0) {
            dispatch(getArticlesListAction(currentPage));
            if(blogH1Ref.current) {
                blogH1Ref.current.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [currentPage]);

    useEffect(() => {
        return () => {
            dispatch(cleanBlogDataAction());
        }
    }, [dispatch]);

    return (
        <>
        {isLoading ? <Spinner/> :
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
                        <ArticleItem img={item.thumbImgUrl} title={item.title} key={item.id} id={item.id} date={item.timestampDateMod}/>
                    ))}
                </div>
            </div>
            <Pagination data={pageData} currentPage={currentPage} setCurrentPage={
                (page: number) => {
                    dispatch(setBlogPaginationPage(page))
                }
            }/>
        </div>}
        </>
    );
};

export default BlogPage;
