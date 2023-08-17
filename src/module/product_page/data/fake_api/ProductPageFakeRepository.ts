import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
import {fakeProductData, tempProductData} from "../tempData";
import apiClient from "../../../../general/data/api_client";
import {setProductDataAction} from "../../redux/asyncActions";
import {ApiResponseProductPreview} from "../../../../general/dto/APIResponseTypes";
import {setDataAction, stopLoadAction} from "../../../landing_page/redux/asyncActions";
import {productsResponse} from "../../../landing_page/utils/constants";

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
                resolve(fakeProductData);
            });
        }

    async getAlsoLike(pageNumber: number): Promise<ApiResponseProductPreview> {
        try {
            const response = await apiClient.get<ApiResponseProductPreview>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`);
            console.log("setAlsoLikeDataAction");
            console.log(response.data);
            setDataAction(response.data);
            stopLoadAction()
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

        return new Promise<ApiResponseProductPreview>((resolve) => {
            console.log("setting the FAKE ALSO LIKE");
            console.log()
            resolve(productsResponse);
        });
    }
    }


