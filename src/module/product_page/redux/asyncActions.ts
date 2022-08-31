import Product from "../domain/model/Product";
import getProductDetails from "../domain/use_case/getProductDetails";
import CartProduct from "../../cart/domain/model/CartProduct";

export const getProductDetailsAction = (productId:string):any => {
    return (dispatch:Function) => {
        dispatch(startProductLoadAction());
        getProductDetails().then((data)=>{
            // console.log(JSON.stringify(data));
            dispatch(setProductDataAction(data));
        });
    }
};
export const START_PRODUCT_LOAD = "start_random_load";
export const SET_PRODUCT_DATA = "set_random_data";
export const ADD_TO_CHART = "sent_product_to_chart";

export const startProductLoadAction = () => ({
        type: START_PRODUCT_LOAD
    });
export const setProductDataAction = (data:Product) => ({
    type: SET_PRODUCT_DATA,
    payload: data
});

export  const  addToChartActionCreator = (data:CartProduct) => ({
    type: ADD_TO_CHART,
    payload: data
})
