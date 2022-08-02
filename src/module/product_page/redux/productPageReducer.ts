import {ProductPageStore} from "./typesProductPage";
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";

export function productPageReducer(
    state: ProductPageStore = {product: new Product("-1"), isLoading: false
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

//