import {ProductPageStore} from "./typesProductPage";
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {
    SET_ALSOLIKE_DATA,
    SET_CART_PRODUCT,
    SET_CURRENT_ALSOLIKE_PAGE,
    SET_PRODUCT_DATA,
    START_PRODUCT_LOAD
} from "./asyncActions";
import {fakeFullProduct} from "../data/tempData";
import {productsResponse} from "../../landing_page/utils/constants";


export function productPageReducer(
    state: ProductPageStore = {product: new Product(fakeFullProduct),
        isLoading: false, currentPage: 0, alsoLikeData: productsResponse
    }, action: Action
){
    switch (action.type){
        case START_PRODUCT_LOAD:{
            console.log("case START_PRODUCT_LOAD")
            return { ...state, isLoading: true}
        }
        case SET_PRODUCT_DATA:{
            console.log("case SET_PRODUCT_DATA")
            return {...state, product: action.payload , isLoading: false}
        }

        case SET_CART_PRODUCT:{
            return { ...state, cartProduct: action.payload}
        }

        case SET_CURRENT_ALSOLIKE_PAGE: {
            console.log("ProductPage reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }

        case SET_ALSOLIKE_DATA: {
            return {...state, alsoLikeData: action.payload}
        }

        default:
            return state;
    }
}

//