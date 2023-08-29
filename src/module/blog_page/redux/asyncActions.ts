import {getArticlesList} from "../domain/use_case/getArticlesList";
import {getHeadersList} from "../domain/use_case/getArticlesList";
import {ApiResponseBlogHeader, ApiResponseBlogPreview} from "../../../general/dto/APIResponseTypes";

export const getBlogDataAction = (pageNumber: number):any => {
    return (dispatch:Function) => {
        dispatch(startBlogLoadAction());
        getHeadersList().then((data)=>{
            dispatch(setHeadersListDataAction(data))
        });
        getArticlesList(pageNumber).then((data)=>{
            dispatch(setArticlesListDataAction(data));
        });
    }
};

export const getArticlesListAction = (pageNumber: number):any => {
    return (dispatch:Function) => {
        dispatch(startArticlesListLoadAction());
        getArticlesList(pageNumber).then((data)=>{
            dispatch(setArticlesListDataAction(data));
        });
    }
};

export const START_BLOG_LOAD = "start_blog_load";
export const START_ARTICLES_LIST_LOAD = "start_articles_list_load";
export const SET_ARTICLES_LIST_DATA = "set_articles_list_data";
export const SET_CURRENT_BLOG_PAGE = 'set_current_blog_page';
export const SET_HEADERS_LIST_DATA = 'set_headers_list_data';
export const CLEAN_BLOG_DATA = 'clean_blog_data';

export const startBlogLoadAction = () => ({
    type: START_BLOG_LOAD
});

export const startArticlesListLoadAction = () => ({
    type: START_ARTICLES_LIST_LOAD
});

export const setBlogPaginationPage = (data: number) => ({
    type: SET_CURRENT_BLOG_PAGE,
    payload: data
});

export const setArticlesListDataAction = (data:ApiResponseBlogPreview) => ({
    type: SET_ARTICLES_LIST_DATA,
    payload: data
});

export const setHeadersListDataAction = (data:Array<ApiResponseBlogHeader>) => ({
    type: SET_HEADERS_LIST_DATA,
    payload: data
});

export const cleanBlogDataAction = () => ({
    type: CLEAN_BLOG_DATA
});
