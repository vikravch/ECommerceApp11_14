import Article from "../domain/model/Article";
import {Action} from "../../../general/redux/Action";
import {SET_ARTICLE_DATA, START_ARTICLE_LOAD} from "./asyncActions";
import {ArticlePageStore} from "./typesArticlePage";


export function articlePageReducer(
    state: ArticlePageStore = {article: new Article("66666"), isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_ARTICLE_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_ARTICLE_DATA:{
            return {...state, isLoading: false}
        }
        default:
            return state;
    }
}