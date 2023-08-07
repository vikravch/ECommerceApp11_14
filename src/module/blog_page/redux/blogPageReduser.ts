import {Action} from "../../../general/redux/Action";
import {
    SET_ARTICLES_LIST_DATA, SET_CURRENT_BLOG_PAGE,
    SET_HEADERS_LIST_DATA,
    START_ARTICLES_LIST_LOAD,
    START_HEADERS_LIST_LOAD
} from "./asyncActions";
import {BlogPageStore} from "./typesBlogPage";

export function blogPageReducer(
    state: BlogPageStore = {
        articlesList: [],
        headersList: [],
        isLoading: false,
        currentPage: 0
    }, action: Action
){
    switch (action.type){
        case START_ARTICLES_LIST_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_ARTICLES_LIST_DATA:{
            console.log('SET ARTICLES')
            return {...state, articlesList: action.payload, isLoading: false}
        }

        case SET_CURRENT_BLOG_PAGE: {
            return {...state, currentPage: action.payload}
        }

        case START_HEADERS_LIST_LOAD: {
            return {...state, isLoading: true}
        }
        case SET_HEADERS_LIST_DATA: {
            return {...state, headersList: action.payload, isLoading: false}
        }
        default:
            return state;
    }
}