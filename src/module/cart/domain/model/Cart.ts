import Product from "../../../product_page/domain/model/Product";

export default class Cart extends Product {
    count: number;

    constructor(idProduct: string, image: string, title: string, color: string, size: string, price: number, count: number) {
        super(idProduct, image, title, color, size, price);
        this.idProduct = idProduct
        this.image = image
        this.title = title
        this.color = color
        this.size = size
        this.price = price
        this.count = count
    }
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