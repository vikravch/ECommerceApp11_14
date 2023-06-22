
import Product from "../domain/model/Product";
import {Action} from "../../../general/redux/Action";
import {SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "./asyncActions";
import {LandingPageStore} from "./typesLandingPage";
import {PUT_PRODUCTS} from "../../category/redux/asyncActions";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {products2} from "../utils/constants";



const transformProduct = (product:any) => {
    return {
        idProduct: product.prodId,
        product_thumb: product.thumbUrl,
        product_title: product.name,
        rating: product.rating,
        price: product.price,
        discount: Math.round(100 - product.price*100/product.oldPrice)
    }
}

const data = transformProduct(products2)

export function landingPageReducer(
    state: LandingPageStore = {
        isLoading: false, data: [data]
    }, action: Action
){
    //todo actions and fetch
    switch (action.type){
        case START_PRODUCT_LOAD:{
            return { ...state, isLoading: true}
        }
        case SET_PRODUCT_DATA:{
            return {...state, isLoading: false}
        }
        case PUT_PRODUCTS:
            const serverProducts = action.payload;
            const newProducts: Array<ProductPreviewInfo> = serverProducts.map(transformProduct)
            return {...state, isLoading: false, data: newProducts}
        default:
            return state;
    }
}
