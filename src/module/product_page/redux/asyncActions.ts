import Product from "../domain/model/Product";
//import getProductDetails from "../domain/use_case/getProductDetails";
import CartProduct from "../../cart/domain/model/CartProduct";
import Repository from "../data/fake_api/ProductPageFakeRepository";
import {SET_DATA, setDataAction, startLoadAction, stopLoadAction} from "../../landing_page/redux/asyncActions";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";
import {sortProductSizesColors} from "../../../general/common/tools";

export const getProductDetailsAction = (productId:string):any => {
    return (dispatch:Function) => {
        console.log("getProductDetailsAction")
        dispatch(startProductLoadAction());
        new Repository().getProductDetails(productId).then((data)=>{
             // console.log(JSON.stringify(data));
            dispatch(setProductDataAction(sortProductSizesColors(data)))
        });
    }
};

export const getAlsoLikeDetailsAction = (pageNumber:number):any => {
    return (dispatch:Function) => {
        console.log("getNewArrivalsAction")
        // dispatch(startLoadAction()); Nastya commented, check why there is state of landing page
        new Repository().getAlsoLike(pageNumber).then((data)=>{
             // console.log(JSON.stringify(data));
            dispatch(setAlsoLikeDataAction(data));
            //dispatch(stopLoadAction());
        });
    }
};

export const START_PRODUCT_LOAD = "start_product_load";
export const SET_PRODUCT_DATA = "set_product_data";
export const SET_CART_PRODUCT = "set_cart_product";
export const ADD_TO_CHART = "add_to_cart"; //Alena did "//"
export const SET_ALSOLIKE_DATA = 'set_alsolike_data';
export const SET_CURRENT_ALSOLIKE_PAGE = "change_pagination_alsolike_page"

export const startProductLoadAction = () => ({
        type: START_PRODUCT_LOAD
    });
export const setProductDataAction = (data:Product) => ({
    type: SET_PRODUCT_DATA,
    payload: data
});

export const setCartProductAction = (data:CartProduct) => ({
    type: SET_CART_PRODUCT,
    payload: data
})

export const setAlsoLikeDataAction = (data: ApiResponseProductPreview ) => ({
    type: SET_ALSOLIKE_DATA,
    payload: data
})

export const setAlsoLikePage = (data: number) => ({
    type: SET_CURRENT_ALSOLIKE_PAGE,
    payload: data
})

//TODO Check what the dif between addToChartAction from ALena's AsyncActions

export  const  addToChartActionTest = (data:CartProduct) => ({
    type: ADD_TO_CHART,
    payload: data
})
