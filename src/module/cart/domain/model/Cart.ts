import Product from "../../../product_page/domain/model/Product";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";
import exp from "constants";

export default class Cart extends ProductPreviewInfo{
    count: number;
    color: string;
    size: string;

    constructor(json: any, count: number, color: string, size: string) {
        super(json);
        this.count = count;
        this.color = color;
        this.size = size;
    }
}

 export class CartItem {
    color: string;
    quantity: number;
    discount: number;
    price: number;
    size: string;
    product_id: number;
    product_thumb: string;
    product_title: string;
    stock_sizes: string[];
    stock_quantity: number;

    constructor(data: any) {
        this.color = data.color || "";
        this.quantity = data.quantity || 0;
        this.discount = data.discount || 0;
        this.price = data.price || 0;
        this.size = data.size || "";
        this.product_id = data.product_id || 0;
        this.product_thumb = data.product_thumb || "";
        this.product_title = data.product_title || "";
        this.stock_sizes = data.stock_sizes || [];
        this.stock_quantity = data.stock_quantity || 0;
    }
}

export class CartData {
    cart: CartItem[];
    subtotal_price: number;
    products_discount: number;
    total_price: number;

    constructor(data: CartData) {
        this.cart = data.cart;
        this.subtotal_price = data.subtotal_price || 0;
        this.products_discount = data.products_discount || 0;
        this.total_price = data.total_price || 0;
    }
}
