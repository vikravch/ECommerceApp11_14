import Article from "../domain/model/Article";
import {Action} from "../../../general/redux/Action";
import {SET_ARTICLE_DATA, START_ARTICLE_LOAD} from "./asyncActions";
import {ArticlePageStore} from "./typesArticlePage";


export function articlePageReducer(
    state: ArticlePageStore = {article: new Article("1196",
            "BNYORIPONW",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            ["http://POSGQB@EDJ","http://PPWYKHIURV","http://LGDLTIDRTX","http://MX@PVBMRGC","http://CXN@IPCWVB"],
            "http://DUOCYTUSKR",
            5225985221736821174), isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_ARTICLE_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_ARTICLE_DATA:{
            return {...state, article:action.payload, isLoading: false}
        }
        default:
            return state;
    }
}