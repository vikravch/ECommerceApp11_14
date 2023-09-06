export default class OrderProduct {
    color: string;
    quantity: string;
    product_id: string;
    product_thumb: string;
    product_title: string;
    size: string;

    constructor(json: OrderProduct) {
        this.color = json.color;
        this.quantity = json.quantity;
        this.product_id = json.product_id;
        this.product_thumb = json.product_thumb;
        this.product_title = json.product_title;
        this.size = json.size;
    }
}