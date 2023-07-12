import Product from "../domain/model/Product";
//import getProductDetails from "../domain/use_case/getProductDetails";
import CartProduct from "../../cart/domain/model/CartProduct";
import Repository from "../data/fake_api/ProductPageFakeRepository";
export const getProductDetailsAction = (productId:string):any => {
    return (dispatch:Function) => {
        console.log("getProductDetailsAction")
        dispatch(startProductLoadAction());
        new Repository().getProductDetails(productId).then((data)=>{
             console.log(JSON.stringify(data));
            dispatch(setProductDataAction(data));
        });
    }
};
export const START_PRODUCT_LOAD = "start_product_load";
export const SET_PRODUCT_DATA = "set_product_data";
export const SET_CART_PRODUCT = "set_cart_product";
export const ADD_TO_CHART = "add_to_cart"; //Alena did "//"

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

//TODO Check what the dif between addToChartAction from ALena's AsyncActions

export  const  addToChartActionTest = (data:CartProduct) => ({
    type: ADD_TO_CHART,
    payload: data
})
