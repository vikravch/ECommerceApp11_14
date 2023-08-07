import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
import {tempProductData} from "../tempData";
import apiClient from "../../../../general/data/api_client";
import {setProductDataAction} from "../../redux/asyncActions";

// mirage.js
export default class ProductPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
            try {
                const response = await apiClient.get<Product>(`/product/`+ productId);
                console.log("setProduct");
                console.log(response.data);
                setProductDataAction(response.data);
                return response.data;
            } catch (error: any) {
                console.log("ERROR: ");
                console.log(error.message);
                throw error;
            }

            return new Promise<Product>((resolve) => {
                console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
                resolve(tempProductData);
            });
        }
    }
