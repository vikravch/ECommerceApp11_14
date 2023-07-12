import LandingPageRepository from "./LandingPageRepository";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";
import {products2} from "../../utils/constants";
import apiClient from "../../../../general/data/api_client";
import {setDataAction} from "../../redux/asyncActions";

export default class LandingPageFakeRepository implements LandingPageRepository{
    async getNewArrivals(pageNumber: number): Promise<Array<ProductPreviewInfo>> {
        apiClient.get<Array<ProductPreviewInfo>>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`).then((res) => {
            console.log("setArrivalsDataAction")
            setDataAction(res.data)
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
            })
        return new Promise<ProductPreviewInfo[]>((resolve) => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
            console.log()
            resolve(products2);
        });
    }
}