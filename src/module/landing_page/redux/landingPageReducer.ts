
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";
import {LandingPageStore} from "../../product_page/redux/typesProductPage";

export function landingPageReducer(
    state: LandingPageStore = {product: new Product("-1"), isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_PRODUCT_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_PRODUCT_DATA:{
            return {...state, isLoading: false}
        }
        default:
            return state;
    }
}
