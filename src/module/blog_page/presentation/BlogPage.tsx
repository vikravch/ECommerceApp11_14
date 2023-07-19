import React, {useEffect} from 'react';
import style from './Blog.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";
import {useDispatch, useSelector} from "react-redux";
import ArticleInfo from "../domain/model/ArticlesList";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction, getHearersListAction} from "../redux/asyncActions";
import formatDate from "../dateTransformer";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";
import {setPaginationPage} from "../../pagination/redux/paginationReducer";
import BlogHeaders from "./BlogHeaders";

const BlogPage: React.FC = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesListAction());
        dispatch(getHearersListAction())
    }, []);

    const currentPage = useSelector<Store, number>(state => state.blogPage.currentPage);

    return (
        <div className={style.wrapper}>
            <div>{articlesList.map((item ) =>
                <BlogHeaders title={item.title} key={item.id} id={item.id}
                             date={formatDate(item.timestampDateMod)}/>)}</div>
            <div>
                <div className={style.articles_wrapper}>{articlesList.map((item) =>
                    <ArticleItem title={item.title} key={item.id} id={item.id}
                                 date={formatDate(item.timestampDateMod)}/>)}
                </div>
            </div>

            <Pagination data={paginationData} currentPage={currentPage} setCurrentPage={
                (page: number) => {
                    dispatch(setPaginationPage(page))
                }
            }/>
        </div>
    );
};

export default BlogPage;

//articlesInfo.ArticleBaseInfo