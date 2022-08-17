import Article from "../domain/model/Article";
import getArticleDetails from "../domain/use_case/getArticleDetails";

export const getArticleDetailsAction = (articleId:string):any => {
    return (dispatch:Function) => {
        dispatch(startArticleLoadAction());
        getArticleDetails(articleId).then((data)=>{
            console.log(JSON.stringify(data));
            dispatch(setArticleDataAction(data));
        });
    }
};
export const START_ARTICLE_LOAD = "start_article_load";
export const SET_ARTICLE_DATA = "set_article_data";

export const startArticleLoadAction = () => ({
        type: START_ARTICLE_LOAD
    });
export const setArticleDataAction = (data:Article) => ({
    type: SET_ARTICLE_DATA,
    payload: data
})
