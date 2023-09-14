import LandingPageRepository from "../domain/LandingPageRepository";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";
import api_client from "../../../general/data/api_client";
import {convertDiscountToPercent} from "../../../general/common/tools";
import {setDataAction, stopLoadAction} from "../redux/asyncActions";
import {productsResponse} from "../utils/constants";



export default class LandingPageFakeRepository implements LandingPageRepository {
    async getNewArrivals(pageNumber: number): Promise<ApiResponseProductPreview> {
        try {
            const response = await api_client.get<ApiResponseProductPreview>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`);
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
        return new Promise<ApiResponseProductPreview>((resolve) => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            console.log()
            resolve(productsResponse);
        });
    }
}