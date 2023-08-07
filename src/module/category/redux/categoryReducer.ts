import {Action} from "../../../general/redux/Action";
import {PRODUCTS_REQUEST, PUT_PRODUCTS, SET_CATEGORY, SET_CURRENT_BLOG_PAGE, SET_SORT} from "./asyncActions";
import {CategoryPageStore, SortProps} from "./typesCategoryPage";
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
    state: CategoryPageStore = {isLoading: true, data: [],
        sort: {name:'By price', prop:SortProps.PRICE_ASC}, currentPage: 0},
    action: Action
) => {
    switch (action.type) {
        case SET_CURRENT_BLOG_PAGE: {
            console.log("Category reducer " + action.payload)
            return {...state, currentPage: action.payload}
        }
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
