import {Action} from "../../../general/redux/Action";
import {SET_ARTICLES_LIST_DATA, START_ARTICLES_LIST_LOAD} from "./asyncActions";
import {BlogPageStore} from "./typesBlogPage";
import ArticleInfo from "../domain/model/ArticleInfo";
import {articlesList} from "../data/fake_api/articlesList";


export function blogPageReducer(
    state: BlogPageStore = {
        articlesList: new Array<ArticleInfo>(),
        isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_ARTICLES_LIST_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_ARTICLES_LIST_DATA:{
            return {...state, articlesList: action.payload, isLoading: false}
        }
        default:
            return state;
    }
}