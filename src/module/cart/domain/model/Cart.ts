import Product from "../../../product_page/domain/model/Product";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

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

    /*constructor(idProduct: string, image: string, title: string, color: string, size: string, price: number, count: number) {
        super(idProduct, image, title, color, size, price);
        this.idProduct = idProduct
        this.image = image
        this.title = title
        this.color = color
        this.size = size
        this.price = price
        this.count = count
    }*/
}

// export default class Product{
//     idProduct : string;
//     image: string;
//     title: string;
//     color: string;
//     size: string;
//     price: number;
//
//
//     constructor(idProduct:string, image: string, title:string, color: string, size:string, price: number) {
//         this.idProduct = idProduct
//         this.image = image
//         this.title = title
//         this.color = color
//         this.size = size
//         this.price = price
//     }
// }