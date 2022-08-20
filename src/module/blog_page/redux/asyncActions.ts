import ArticlesList from "../domain/model/ArticlesList";
import getArticlesList from "../domain/use_case/getArticlesList";

export const getArticlesListAction = (articleId:string):any => {
    return (dispatch:Function) => {
        dispatch(startArticlesListLoadAction());
        getArticlesList(articleId).then((data)=>{
            console.log(JSON.stringify(data));
            dispatch(setArticlesListDataAction(data));
        });
    }
};
export const START_ARTICLES_LIST_LOAD = "start_articles_list_load";
export const SET_ARTICLES_LIST_DATA = "set_articles_list_data";

export const startArticlesListLoadAction = () => ({
        type: START_ARTICLES_LIST_LOAD
    });
export const setArticlesListDataAction = (data:ArticlesList) => ({
    type: SET_ARTICLES_LIST_DATA,
    payload: data
})
