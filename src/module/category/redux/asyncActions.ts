import {Dispatch} from "react"
import api_client from "../../../general/data/api_client";
import apiClient from "../../../general/data/api_client";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";
import {convertDiscountToPercent} from "../../../general/common/tools";
import Product from "../../product_page/domain/model/Product";
import {setProductDataAction} from "../../product_page/redux/asyncActions";
import {fakeProductData} from "../../product_page/data/tempData";
import {categoryProductsFake} from "../fakeData/productsFake";

export const PRODUCTS_LOAD = "products_load";
export const SET_CATEGORY = "set_category";
export const SET_SORT = "set_sort";
export const PUT_PRODUCTS = "put_products"
export const SET_CURRENT_CATEGORY_PAGE = "change_pagination_category_page"

const headers = {
    'Content-Type': 'application/json',
};

export const productsLoadAction = () => ({
    type: PRODUCTS_LOAD
});

export const getProdustsByGender = (gender: string): any => async (dispatch: Dispatch<any>) => {
    dispatch(productsLoadAction());
    try {
        console.log("BEFORE getProdustsByGender");
        const response = await apiClient.get<ApiResponseProductPreview>(`/products?page=0&pageSize=9&client_type=${gender.toUpperCase()}`, {headers});
        console.log("after getProdustsByGender");
        console.log(response.data);
        console.log(response.data.content);
        //setDataAction(response.data);
        response.data.content.forEach(p => p.discountPercent = convertDiscountToPercent(+p.price, +p.discount));
        dispatch({type: PUT_PRODUCTS, payload: response.data.content})
        //stopLoadAction()
        return response.data;
    } catch (error: any) {
        console.log("ERROR: ");
        console.log(error.message);
        dispatch({type: PRODUCTS_LOAD, isLoading: false})
       // throw error;
        return new Promise<ApiResponseProductPreview>((resolve) => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            dispatch({type: PUT_PRODUCTS, payload: categoryProductsFake.content})
            //resolve(categoryProductsFake.content);
        })
    }
}

export const getProdustsByCategory = (category: string): any => async (dispatch: Dispatch<any>) => {
    dispatch(productsLoadAction());
    let URLPart: string;
    (category.toUpperCase() == 'SALE') ? (URLPart = 'discount_products_get') : (URLPart = `product_by_gender_get?gender=${category.toUpperCase()}`)
    fetch(`${api_client}${URLPart}`,
        {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => console.log(response.json()))
        .then(data => dispatch({type: PUT_PRODUCTS, payload: data}))
        .catch(error => console.log('error', error));
}

export const getProductsByGenderAndCategory = (gender: string, category: string): any => async (dispatch: Dispatch<any>) => {
    console.log(gender)
    console.log(category)
    dispatch(productsLoadAction());
    if (category == 'ALL') {
        dispatch(getProdustsByGender(gender))
        return
    } else {
        console.log(`${api_client}product_by_gender_get?gender=${gender.toUpperCase()}&category=${category}`)
        fetch((`${api_client}product_by_gender_get?gender=${gender.toUpperCase()}&category=${category}`),
            {
                method: 'GET',
                redirect: 'follow'
            })
           // .then(response => response.json())
            .then(response => console.log(response.json()))
          //  .then(response =>  dispatch({type: PUT_PRODUCTS, payload: response.data.content}))
            .catch(error => console.log('error', error));
    }
}



