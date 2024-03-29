//import CartPag from "../../domain/ProductPageRepository";
//import Product from "../../domain/model/Product";
// mirage.js

import CartPageRepository from "../../domain/use_case/CartPageRepository";
import {CartData} from "../../domain/model/Cart";
import apiClient from "../../../../general/data/api_client";
import {DeletedItem, FillCartItems} from "../../redux/typesCartPage";

const  fakeCartData = {
    "cart": [
        {
            "color": "Navy Blue",
            "quantity": 3,
            "discount": 0,
            "price": 52,
            "size": "M",
            "product_id": 14,
            "product_thumb": "https://i.imgur.com/izhck6B.jpg",
            "product_title": "Thermal Running Coat",
            "stock_sizes": [
                "XS",
                "M",
                "XL"
            ],
            "stock_quantity": 3
        },
        {
            "color": "Champagne",
            "quantity": 1,
            "discount": 15,
            "price": 38.5,
            "size": "S",
            "product_id": 55,
            "product_thumb": "https://i.imgur.com/Hf982Ml.jpg",
            "product_title": "Sleeveless Fitness Jumpsuit",
            "stock_sizes": [
                "XXL",
                "S",
                "M",
                "L",
                "XL"
            ],
            "stock_quantity": 2
        },
        {
            "color": "Navy Blue",
            "quantity": 1,
            "discount": 5,
            "price": 48.5,
            "size": "36",
            "product_id": 110,
            "product_thumb": "https://i.imgur.com/ACIfa8E.jpg",
            "product_title": "Crossfit Training Shoes",
            "stock_sizes": [
                "39",
                "42",
                "36"
            ],
            "stock_quantity": 4
        },
        {
            "color": "Mint Green",
            "quantity": 1,
            "discount": 0,
            "price": 61,
            "size": "One size",
            "product_id": 148,
            "product_thumb": "https://i.imgur.com/QwydTK4.jpg",
            "product_title": "Running Polarized Sunglasses",
            "stock_sizes": [
                "One size"
            ],
            "stock_quantity": 3
        }
    ],
    "subtotal_price": 324,
    "products_discount": 20,
    "total_price": 304
}


export default class CartPageFakeRepository implements CartPageRepository{

    async getCartDetails(token: string, refreshToken: string): Promise<CartData> {

        const headers = {
            'AccessToken': token,
            'RefreshToken': refreshToken
        }

        try {
            const response = await apiClient.get<CartData>('/cart', {headers});
            console.log("getCartDetails");
            console.log(response.data);
            //setAction(response.data);
            return response.data
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

        return new Promise((resolve => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            resolve(new CartData(fakeCartData));
        }));
    }
    async fillCartOnServer(items: Array<FillCartItems>, token: string, refreshToken: string): Promise<CartData> {
        const headers = {
            'AccessToken': token,
            'RefreshToken': refreshToken,
            'Content-Type': 'application/json'
        }

        // const data = JSON.stringify([
        //     {
        //         "product_id": "40",
        //         "size": "L"
        //     },
        //     {
        //         "product_id": "12",
        //         "size": "7"
        //     }
        // ]);
        //console.log(data)

        console.log(headers)
        try {
            console.log("FILL CartDetails Repo");
            const response = await apiClient.post<CartData>('/cart', items, {headers});
            console.log("FILL CartDetails");
            console.log(response.data);
            //setAction(response.data);
            return response.data
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }
        return new Promise((resolve => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            resolve(new CartData(fakeCartData));
        }));
    }

    async deleteCartItem(token: string, refreshToken: string, item: DeletedItem): Promise<any> {
        console.log(" before try - Delete item from cart");
        const headers = {
            'AccessToken': token,
            'RefreshToken': refreshToken,
            'Content-Type': 'application/json'
        }
        try {
            console.log(" before - Delete item from cart");
            const response = await apiClient.delete<DeletedItem>('/cart/product', {
                headers,
                data: {
                    item
                },
            });
            console.log("//Delete item from cart");
            console.log(response.data);
            //setAction(response.data);
            return response.data
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

    }
}
