export default class Product{
    idProduct : string;
    image: string;
    title: string;
    color: string;
    size: string;
    price: number;


    constructor(idProduct:string, image: string, title:string, color: string, size:string, price: number) {
        this.idProduct = idProduct
        this.image = image
        this.title = title
        this.color = color
        this.size = size
        this.price = price
    }
}