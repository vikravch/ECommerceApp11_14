import LandingPageRepository from "./LandingPageRepository";
import {productsResponse} from "../../utils/constants";
import apiClient from "../../../../general/data/api_client";
import {setDataAction} from "../../redux/asyncActions";
import {ApiResponseProductPreview} from "../../../../general/dto/APIResponseTypes";

export default class LandingPageFakeRepository implements LandingPageRepository{
    async getNewArrivals(pageNumber: number): Promise<ApiResponseProductPreview> {
        try {
            const response = await apiClient.get<ApiResponseProductPreview>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`);
            console.log("setArrivalsDataAction");
            console.log(response.data);
            setDataAction(response.data);
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

        return new Promise<ApiResponseProductPreview>((resolve) => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            console.log()
            resolve(productsResponse);
        });
    }
}