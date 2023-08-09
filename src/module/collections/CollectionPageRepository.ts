import {ApiResponseCollections} from "../../general/dto/APIResponseTypes";
import api_client from "../../general/data/api_client";
import {setDataAction} from "./redux/asyncActions";

export default class CollectionPageRepository {
    async getCollections(pageNumber: number): Promise<ApiResponseCollections> {
        console.log('CollectionPageRepository')
        try {
            const response = await api_client.get<ApiResponseCollections>(`/products/collections?page=${pageNumber}&size=12`);
            console.log("set COLLeCTIONS");
            console.log(response.data);
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

        // return new Promise<ApiResponseProductPreview>((resolve) => {
        //     console.log("ProductPageFakeRepository - getProductDetails - setting the FAKE product");
        //     console.log()
        //     resolve(productsResponse);
        // });
    }
}