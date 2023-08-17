import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

export default class CartProduct{
    count: number;
    color: string;
    size: string;
    product_id: string;
    product_thumb: string;
    product_title: string;
    price: number;
    discount: number;
    rating?: string;
    stock_sizes?: string[];
    stock_quantity?: number;

    constructor(data: CartProduct) {
        this.count = data.count;
        this.color = data.color;
        this.size = data.size;
        this.product_id = data.product_id;
        this.product_thumb = data.product_thumb;
        this.product_title = data.product_title;
        this.rating = data.rating;
        this.price = Number(data.price);
        this.discount = Number(data.discount);
        this.stock_sizes = data.stock_sizes || [];
        this.stock_quantity = data.stock_quantity || 0;
    }

}