import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
import {fakeFullProduct, tempProductData} from "../tempData";
import apiClient from "../../../../general/data/api_client";
import {setProductDataAction} from "../../redux/asyncActions";

// mirage.js
export default class ProductPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
        apiClient.get<Product>(`/product/`+ productId).then((res) => {
            console.log("setProductDataAction")
            setProductDataAction(res.data);
            //setLoading(false);
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
                //setLoading(false);
            })
        return new Promise((resolve => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product")
            resolve(new Product(fakeFullProduct));
        }));

    }
    async getProductFake(): Promise<Product> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Product(tempProductData))
            }, 2000);
        });
        console.log("async getProductFake()")
    }
}
