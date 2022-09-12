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
        this.idProduct = json.idProduct;
        this.product_main_img = json.product_main_img;
        this.product_imgs = json.product_imgs;
        this.product_title = json.product_title;
        this.description = json.description;
        this.rating = json.rating;
        this.colors = json.colors;
        this.size = sizes;
        this.details = json.details;
        this.price = json.price;
        this.discount = json.discount;
    }
}
