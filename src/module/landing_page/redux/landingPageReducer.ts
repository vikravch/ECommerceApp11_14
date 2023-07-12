import {Action} from "../../../general/redux/Action";
import {SET_DATA, START_LOADING} from "./asyncActions";
import {LandingPageStore} from "./typesLandingPage";
import {PUT_PRODUCTS} from "../../category/redux/asyncActions";
import {products2} from "../utils/constants";
import {SET_CURRENT_PAGE} from "../../pagination/redux/paginationReducer"

const transformProduct = (product: any) => {
    return {
        idProduct: product.prodId,
        product_thumb: product.thumbUrl,
        product_title: product.name,
        rating: product.rating,
        price: product.price,
        discount: Math.round(100 - product.price * 100 / product.oldPrice)
    }
}

const data = [transformProduct(products2)]

export function landingPageReducer(
    state: LandingPageStore = {
        isLoading: false, data: data, currentPage: 0
    }, action: Action
) {
    //todo actions and fetch
    switch (action.type) {
        case START_LOADING: {
            return {...state, isLoading: true}
        }
        case SET_DATA: {
            return {...state, data: action.payload, isLoading: false}
        }
        case SET_CURRENT_PAGE: {
            console.log("Landing reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }
        case PUT_PRODUCTS:
            return {...state, isLoading: false, data: action.payload}
        default:
            return state;
    }
}
