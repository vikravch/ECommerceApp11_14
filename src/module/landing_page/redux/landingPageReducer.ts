import {Action} from "../../../general/redux/Action";
import {SET_CURRENT_NEWARRIVALS_PAGE, SET_DATA, START_LOADING, STOP_LOADING} from "./asyncActions";
import {LandingPageStore} from "./typesLandingPage";
import {PUT_PRODUCTS, } from "../../category/redux/asyncActions";
import {productsResponse} from "../utils/constants";
import {pageResponse} from "../../pagination/data/fakeData";
// productsData: productsResponse

export function landingPageReducer(
    state: LandingPageStore = {
        isLoading: false, productsData: productsResponse, pageData: pageResponse, currentPage: 0
    }, action: Action
) {
    switch (action.type) {
        case START_LOADING: {
            return {...state, isLoading: true}
        }
        case STOP_LOADING: {
            return {...state, isLoading: false}
        }

        case SET_DATA: {
            console.log("SET DATA PAYLOAD:::")
            console.log(action.payload)
            return {...state, productsData: action.payload, pageData: action.payload, isLoading: false}
        }
        case SET_CURRENT_NEWARRIVALS_PAGE: {
            console.log("Landing reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }
        case PUT_PRODUCTS:
            return {...state, isLoading: false, data: action.payload}
        default:
            return state;
    }
}
