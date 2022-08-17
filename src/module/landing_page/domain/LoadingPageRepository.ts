import Product from "./model/Product";

export default interface LandingPageRepository{
    getProductDetails: (productId: string)=> Promise<Product>;
}