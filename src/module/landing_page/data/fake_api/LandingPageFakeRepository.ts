import LandingPageRepository from "./LandingPageRepository";
import {productsResponse} from "../../utils/constants";
import apiClient from "../../../../general/data/api_client";
import {setDataAction} from "../../redux/asyncActions";
import {ApiResponseProductPreview} from "../../../../general/dto/APIResponseTypes";

export default class LandingPageFakeRepository implements LandingPageRepository{
    async getNewArrivals(pageNumber: number): Promise<ApiResponseProductPreview> {
        apiClient.get<ApiResponseProductPreview>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`).then(
            (res) => {
            console.log("setArrivalsDataAction")
            setDataAction(res.data)
        })
            .catch((err:Error) => {
                console.log("ERROR: ")
                console.log(err.message)
            })
        return new Promise<ApiResponseProductPreview>((resolve) => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            console.log()
            resolve(productsResponse);
        });
    }
}