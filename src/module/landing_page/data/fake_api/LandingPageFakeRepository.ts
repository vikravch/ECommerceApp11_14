import Product from "../../domain/model/Product";
import LandingPageRepository from "./LandingPageRepository";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";
import {products2} from "../../utils/constants";
import landingDetailPage from "../../presentation/LandingDetailPage";
import apiClient from "../../../../general/data/api_client";
import {setProductDataAction} from "../../../product_page/redux/asyncActions";
import NewArrivals from "../../presentation/NewArrivals";
import {fakeFullProduct} from "../../../product_page/data/tempData";
import {setDataAction} from "../../redux/asyncActions";
import newArrivals from "../../presentation/NewArrivals";
// mirage.js


export default class LandingPageFakeRepository implements LandingPageRepository{
    async getNewArrivals(pageNumber: number): Promise<Array<ProductPreviewInfo>> {
        apiClient.get<Product>(`/collection/new_arrived?page=${pageNumber}&pageSize=12&sort=acquisition_date_desc`).then((res) => {
            console.log("setArrivalsDataAction")
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
            })
        return new Promise((resolve => {
            console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product")
            resolve([new ProductPreviewInfo(products2.map(el => el))]);
        }));
    }
}