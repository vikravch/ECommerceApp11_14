import {sizes} from "../../../../general/data/sizes";

export default class Product {
    idProduct: string;
    product_main_img: string;
    product_imgs: string[];
    product_title: string;
    description: string;
    rating: string;
    colors: string[];
    size: { S: string; L: string; M: string };
    details: string;
    price: number;
    discount: number;

    constructor(json: any) {
        this.idProduct = json.product_id || '';
        this.product_main_img = json.product_thumb;
        this.product_imgs = json.product_imgs || [''];
        this.product_title = json.product_title || '';
        this.description = json.description || '';
        this.rating = json.rating || '';
        this.colors = json.colors.map((color: any) => color.color) || ["black", "white", "blue"];
        this.size = { S: json.size[0], L: json.size[1], M: json.size[2] } || sizes;
        this.details = json.details || '';
        this.price = parseFloat(json.price) || 100;
        this.discount = parseFloat(json.discount) || 50;
    }
}

