import Product from "../../product_page/domain/model/Product";
import apiClient from "../../../general/data/api_client";
import {setProductDataAction} from "../../product_page/redux/asyncActions";
import {tempProductData} from "../../product_page/data/tempData";
import api_client from "../../../general/data/api_client";

export default class AuthRepository {
    async signIn(productId: string): Promise<any> {


        // return new Promise<Product>((resolve) => {
        //     console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
        //     resolve(tempProductData);
        // });
    }

    async signUp(): Promise<any> {
        const data = {
            "birthDate": "1999-01-01",
            "name": "Name",
            "surname": "Surname"
        };

        const headers = {
            'User-Password': 'dXNlckBnb28uY29tOlBhc3N3b3JkMTA='
        };

        try {
            const response = await apiClient.post<any>('/auth/registration', data, { headers });
            console.log("LogUp");
            console.log(response.data);
            // setter
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }
    }
}