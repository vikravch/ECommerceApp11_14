import ArticlesList from "../domain/model/ArticlesList";
import {getArticlesList} from "../domain/use_case/getArticlesList";
import {getHeadersList} from "../domain/use_case/getArticlesList";

export const getArticlesListAction = ():any => {
    return (dispatch:Function) => {
        dispatch(startArticlesListLoadAction());
        getArticlesList().
        then((data)=>{
            dispatch(setArticlesListDataAction(data.content));
        });
    }
};

export const getHearersListAction = ():any => {
    return (dispatch:Function) => {
        dispatch(startHeadersListLoadAction());
        getHeadersList().
        then((data)=>{
            dispatch(setHeadersListDataAction(data));
        });
    }
};

export const START_ARTICLES_LIST_LOAD = "start_articles_list_load";
export const SET_ARTICLES_LIST_DATA = "set_articles_list_data";

export const SET_HEADERS_LIST_DATA = 'set_headers_list_data';
export const START_HEADERS_LIST_LOAD = 'start_headers_load'


export const startArticlesListLoadAction = () => ({
        type: START_ARTICLES_LIST_LOAD
    });
export const setArticlesListDataAction = (data:Array<ArticlesList>) => ({
    type: SET_ARTICLES_LIST_DATA,
    payload: data
})

export const setHeadersListDataAction = (data:Array<any>) => ({
    type: SET_HEADERS_LIST_DATA,
    payload: data
})

export const startHeadersListLoadAction = () => ({
    type: START_HEADERS_LIST_LOAD
});
