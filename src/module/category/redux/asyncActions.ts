import {Dispatch} from "react"
import {DOMAIN_NAME} from "../../../general/data/server_setting";
export const SET_CATEGORY = "set_category";
export const SET_SORT = "set_sort";
export const PUT_PRODUCTS = "put_products"
export const PRODUCTS_REQUEST = "products_request"


export const getProdustsByCategory = (category:string):any => async (dispatch:Dispatch<any>) => {
        dispatch({type: PRODUCTS_REQUEST})
        let URLPart = '';
        (category.toUpperCase() == 'SALE') ? (URLPart = 'discount_products_get') : (URLPart = `product_by_gender_get?gender=${category.toUpperCase()}`)
        fetch(`${DOMAIN_NAME}${URLPart}`,
            {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(data => dispatch({type: PUT_PRODUCTS, payload: data}))
            .catch(error => console.log('error', error));
    }

export const getProductsByGenderAndCategory = (gender:string, category:string):any => async (dispatch:Dispatch<any>) => {
    console.log(gender)
    console.log(category)

    if (category == 'ALL') {
        dispatch(getProdustsByCategory(gender))
        return} else {
        console.log(`${DOMAIN_NAME}product_by_gender_and_category_get?gender=${gender.toUpperCase()}&category=${category}`)
        fetch(`${DOMAIN_NAME}product_by_gender_and_category_get?gender=${gender.toUpperCase()}&category=${category}`,
            {
                method: 'GET',
                redirect: 'follow'
            })
            .then(response => response.json())
            .then(data => dispatch({type: PUT_PRODUCTS, payload: data}))
            .catch(error => console.log('error', error));
    }
}


