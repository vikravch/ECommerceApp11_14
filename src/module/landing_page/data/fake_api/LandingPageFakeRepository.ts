import LandingPageRepository from "./LandingPageRepository";
import apiClient from "../../../../general/data/api_client";
import {setDataAction, stopLoadAction} from "../../redux/asyncActions";
import {ApiResponseProductPreview} from "../../../../general/dto/APIResponseTypes";
import {convertDiscountToPercent} from "../../../../general/common/tools";

export default class LandingPageFakeRepository implements LandingPageRepository {
    async getNewArrivals(pageNumber: number): Promise<ApiResponseProductPreview> {
        try {
            const response = await apiClient.get<ApiResponseProductPreview>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`);
            console.log("setArrivalsDataAction");
            console.log(response.data);
            response.data.content.forEach(p => p.discountPercent = convertDiscountToPercent(+p.price, +p.discount));
            setDataAction(response.data);
            stopLoadAction()
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }
    }
}