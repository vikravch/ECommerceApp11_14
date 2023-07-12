import {ProductPageStore} from "./typesProductPage";
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_CART_PRODUCT, SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";
import {fakeFullProduct, tempCartPr, tempProductData} from "../data/tempData";
import {SET_CURRENT_PAGE} from "../../pagination/redux/paginationReducer";


export function productPageReducer(
    state: ProductPageStore = {product: new Product(fakeFullProduct),
        isLoading: false, currentPage: 0
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

        case SET_CURRENT_PAGE: {
            console.log("ProductPage reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }

        default:
            return state;
    }
}

//