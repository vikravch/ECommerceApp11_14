import {Action} from "../../../general/redux/Action";
import {
    PUT_PRODUCTS,
    SET_CATEGORY,
    SET_CURRENT_CATEGORY_PAGE,
    SET_SORT, PRODUCTS_LOAD
} from "./asyncActions";
import {CategoryPageStore, SortProps} from "./typesCategoryPage";
import {pageResponse} from "../../pagination/data/fakeData";


export const categoryReducer = (
    state: CategoryPageStore = {isLoading: false, data: [],
        sort: {name:'By price', prop:SortProps.PRICE_ASC}, pageData: pageResponse, currentPage: 0},
    action: Action
) => {
    switch (action.type) {
        case PRODUCTS_LOAD: return {...state, isLoading: true}
        case SET_CURRENT_CATEGORY_PAGE: {
            console.log("Category reducer " + action.payload)
            return {...state, currentPage: action.payload, isLoading: false}
        }
        case SET_CATEGORY:
            return {...state, Order: action.payload, isLoading: false}
        case SET_SORT:
            return {...state, isLoading: false};
        case PUT_PRODUCTS:
            return {...state, isLoading: false, data:  action.payload}
        default:
            return state;
    }
};
