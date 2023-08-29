import {Action} from "../../../general/redux/Action";
import {
    SET_ARTICLES_LIST_DATA, SET_CURRENT_BLOG_PAGE,
    SET_HEADERS_LIST_DATA,
    START_ARTICLES_LIST_LOAD, START_BLOG_LOAD,
} from "./asyncActions";
import {BlogPageStore} from "./typesBlogPage";
import {pageResponse} from "../../pagination/data/fakeData";

export function blogPageReducer(
    state: BlogPageStore = {
        articlesList: [],
        pageData: pageResponse,
        headersList: [],
        isLoading: false,
        currentPage: 0
    }, action: Action
){
    switch (action.type){
        case START_BLOG_LOAD: {
            return {...state, isLoading: true}
        }
        case START_ARTICLES_LIST_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_CURRENT_BLOG_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case SET_ARTICLES_LIST_DATA:{
            return {...state, articlesList: action.payload.content, pageData: action.payload, isLoading: false}
        }
        case SET_HEADERS_LIST_DATA: {
            return {...state, headersList: action.payload}
        }
        default:
            return state;
    }
}