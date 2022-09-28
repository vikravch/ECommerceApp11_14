import {Action} from "../../../general/redux/Action";
import {PRODUCTS_REQUEST, PUT_PRODUCTS, SET_CATEGORY, SET_SORT} from "./asyncActions";
import {SortProps} from "./typesCategoryPage";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";

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

export const categoryReducer = (
    state = {isLoading: true, data: [], sort: {name:'By price', prop:SortProps.PRICE_ASC}},
    action: Action
) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, Order: action.payload}
        case SET_SORT:
            return state;
        case PRODUCTS_REQUEST:
            return {...state, isLoading: true}
        case PUT_PRODUCTS:
            const serverProducts = action.payload;
            const newProducts: Array<ProductPreviewInfo> = serverProducts.map(transformProduct)
            return {...state, isLoading: false, data: newProducts}
        default:
            return state;
    }
};
