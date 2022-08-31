import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

export default class CartProduct{
    count: number;
    color: string;
    size: string;
    idProduct: string;
    product_thumb: string;
    product_title: string;
    rating: string;
    price: number;
    discount: number;

    constructor(count: number, color: string, size: string,
                idProduct: string, product_thumb: string,
                product_title: string, rating: string,
                price: number, discount: number) {
        this.count = count;
        this.color = color;
        this.size = size;
        this.idProduct = idProduct;
        this.product_thumb = product_thumb;
        this.product_title = product_title;
        this.rating = rating;
        this.price = price;
        this.discount = discount;
    }

}