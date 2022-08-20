import ArticlesList from "../domain/model/ArticlesList";
import {Action} from "../../../general/redux/Action";
import {SET_ARTICLES_LIST_DATA, START_ARTICLES_LIST_LOAD} from "./asyncActions";
import {BlogPageStore} from "./typesBlogPage";


export function blogPageReducer(
    state: BlogPageStore = {articlesList: new ArticlesList("-1"), isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_ARTICLES_LIST_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_ARTICLES_LIST_DATA:{
            return {...state, isLoading: false}
        }
        default:
            return state;
    }
}