export default class ProductPreviewInfo {
    idProduct: string;
    product_thumb: string;
    product_title: string;
    rating: number;
    price: number;
    discount: number;

    constructor(json: any) {
        this.idProduct = json.idProduct;
        this.product_thumb = json.product_thumb;
        this.product_title = json.product_title;
        this.rating = json.rating;
        this.price = json.price;
        this.discount = json.discount;
    }
}