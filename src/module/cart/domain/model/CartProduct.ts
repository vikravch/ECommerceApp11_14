
export default class CartProduct{
    quantity: number;
    color: string;
    size: string;
    product_id: string;
    product_thumb: string;
    product_title: string;
    price: string;
    discount: string;
    stock_sizes: string[];
    stock_quantity?: number;

    constructor(data: CartProduct) {
        this.quantity = + data.quantity;
        this.color = data.color;
        this.size = data.size;
        this.product_id = data.product_id;
        this.product_thumb = data.product_thumb;
        this.product_title = data.product_title;
        this.price = data.price;
        this.discount = data.discount;
        this.stock_sizes = data.stock_sizes;
        this.stock_quantity = data.stock_quantity || 0;
    }

}