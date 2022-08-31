import {ProductPageStore} from "./typesProductPage";
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";
import {tempProductData} from "../data/tempData";

export function productPageReducer(
    state: ProductPageStore = {product: new Product(tempProductData), isLoading: false
    }, action: Action
){
    switch (action.type){
        case START_PRODUCT_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_PRODUCT_DATA:{
            let fakeProduct:Product = tempProductData
            return {...state, product: fakeProduct , isLoading: false}
        }
        default:
            return state;
    }
}

//