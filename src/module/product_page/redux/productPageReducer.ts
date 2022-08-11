import {ProductPageStore} from "./typesProductPage";
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";

export function productPageReducer(
    state: ProductPageStore = {product: new Product("7114", "../public/images/img_7114.jpg", "Basic t-shirt", "Purple", "L / 14 US", 55), isLoading: false
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