import Product from "./model/Product";

export default interface ProductPageRepository{
    getProductDetails: (productId: string)=> Promise<Product>;
}