export default class Product {
    idProduct: string;
    product_main_img: string;
    product_imgs: string[];
    product_title: string;
    description: string;
    rating: string;
    colors: string[];
    size: string[];
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
        this.size = json.size;
        this.details = json.details;
        this.price = json.price;
        this.discount = json.discount;
    }
}


const productStr = '{"idProduct":"1111",' +
    '"product_main_img":"img_1111.jpg",' +
    '"product_imgs": [, img_1131.jpg, img_1141.jpg],' +
    '"product_title":Basic T-shirt,' +
    '"description":"The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",' +
    '"rating":4,' +
    '"colors":"Black",' +
    '"size":"L/14 US",' +
    '"details":"Standard fit for a relaxed, easy feel Fabric: 100% cotton Machine wash Imported Shown: Cactus Flower Style: CU8914-564.",' +
    '"price":55,' +
    '"discount":45,}';