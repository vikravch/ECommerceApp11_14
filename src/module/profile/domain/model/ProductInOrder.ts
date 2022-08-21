export default class ProductInOrder{
    color: string;
    idProduct: string;
    product_thumb: string;
    product_title: string;
    quantity: string;
    size: string;
    sizeUS: string;

    constructor(product: any) {
        this.color = product.color;
        this.idProduct = product.idProduct;
        this.product_thumb = product.product_thumb;
        this.product_title = product.product_title;
        this.quantity = product.quantity;
        this.size = product.size;
        this.sizeUS = product.sizeUS;
    }
}