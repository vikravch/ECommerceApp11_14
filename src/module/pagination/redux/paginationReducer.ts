import {ProductPageStore} from "../../product_page/redux/typesProductPage";
import Product from "../../product_page/domain/model/Product";
import {tempCartPr, tempProductData} from "../../product_page/data/tempData";
import {Action} from "../../../general/redux/Action";
import {SET_CART_PRODUCT, SET_PRODUCT_DATA, START_PRODUCT_LOAD} from "../../product_page/redux/asyncActions";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {products2} from "../../landing_page/utils/constants";

import {paginationData} from "../data/fakeData";
import {SET_DATA, START_DATA_LOAD} from "./asyncActions";


class PaginationStore {
}

export function paginationReducer(
    state: PaginationStore = {data: paginationData,
        isLoading: false,
    }, action: Action
){
    switch (action.type){
        case START_DATA_LOAD:{
            console.log("case in reducer START_DATA_LOAD")
            return { ...state, isLoading: true}
        }
        case SET_DATA:{
            console.log("case in reducer SET_DATA")
            return {...state, isLoading: false}
        }

        default:
            return state;
    }
}

