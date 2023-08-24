import {Action} from "../../../general/redux/Action";
import {
    PRODUCTS_REQUEST,
    PUT_PRODUCTS,
    SET_CATEGORY,
    SET_CURRENT_CATEGORY_PAGE,
    SET_SORT
} from "./asyncActions";
import {CategoryPageStore, SortProps} from "./typesCategoryPage";
import {pageResponse} from "../../pagination/data/fakeData";


export const categoryReducer = (
    state: CategoryPageStore = {isLoading: true, data: [],
        sort: {name:'By price', prop:SortProps.PRICE_ASC}, pageData: pageResponse, currentPage: 0},
    action: Action
) => {
    switch (action.type) {
        case SET_CURRENT_CATEGORY_PAGE: {
            console.log("Category reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }
        case SET_CATEGORY:
            return {...state, Order: action.payload}
        case SET_SORT:
            return state;
        case PRODUCTS_REQUEST:
            return {...state, isLoading: true}
        case PUT_PRODUCTS:

            return {...state, isLoading: false, data:  action.payload}
        default:
            return state;
    }
};
