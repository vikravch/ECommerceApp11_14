import {sizes} from "../../../../general/data/sizes";

export class ProductColor {
    color: string;
    product_id: string;
    product_thumb: string;

    constructor(data: any) {
        this.color = data.color || "";
        this.product_id = data.product_id || "";
        this.product_thumb = data.product_thumb || "";
    }
}

export default class Product {
    category: string;
    colors: ProductColor[];
    description: string;
    details: string;
    discount: string;
    price: string;
    size: string[];
    client_type: string;
    product_id: string;
    product_imgs: string[];
    product_thumb: string;
    product_title: string;

    constructor(data: any) {
        this.category = data.category || "";
        this.colors = data.colors.map((colorData: any) => new ProductColor(colorData)) || sizes;
        this.description = data.description || "";
        this.details = data.details || "";
        this.discount = data.discount || "0.00";
        this.price = data.price || "0.00";
        this.size = data.size || [];
        this.client_type = data.client_type || "";
        this.product_id = data.product_id || "";
        this.product_imgs = data.product_imgs || [];
        this.product_thumb = data.product_thumb || "";
        this.product_title = data.product_title || "";
    }
}


//
// export default class ProductOld {
//     idProduct: string;
//     product_thumb: string;
//     product_imgs: string[];
//     product_title: string;
//     description: string;
//     rating: string;
//     colors: string[];
//     size: string[];
//     details: string;
//     price: number;
//     discount: number;
//
//     constructor(json: any) {
//         this.idProduct = json.product_id || '';
//         this.product_thumb = json.product_thumb;
//         this.product_imgs = json.product_imgs || [''];
//         this.product_title = json.product_title || '';
//         this.description = json.description || '';
//         this.rating = json.rating || '';
//         this.colors = json.colors.map((color: any) => color.color) || ["black", "white", "blue"];
//         this.size = json.size || sizes;
//         this.details = json.details || '';
//         this.price = parseFloat(json.price) || 100;
//         this.discount = parseFloat(json.discount) || 50;
//     }
// }

