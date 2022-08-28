import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";

export default class ProductPageAPIRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
        const response = await fetch(`${DOMAIN_NAME}/product_by_id_get?id=${productId}`);
        if(response.ok){
            const json = await response.json();
            try{
                const resProduct = JSON.parse(json) as Product;
                return Promise.resolve(resProduct);
            } catch(err){
                return Promise.reject(err);
            }
        } else {
            return Promise.reject(new Error("Response failed"));
        }
    }
}
