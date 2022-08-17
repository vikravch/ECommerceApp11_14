export default class Product{
    idProduct: string;
    // prorduct_main_img: string;
    // prorduct_img: string[];
    // product_title:string;
    // description: string;
    // rating:string;
    // colors:string[];
    // size: string[];
    // details:string;
    // price:number;
    // discount:number;

    constructor(idProduct:string) {
        this.idProduct = idProduct;

    }
}

const productStr = '{"idProduct":"1111",' +
    '"prorduct_main_img":"img_1111.jpg",' +
    '"prorduct_imgs": {img_1121.jpg, img_1131.jpg, img_1141.jpg},' +
    '"product_title":Basic T-shirt,' +
    '"description":"The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",' +
    '"rating":4,' +
    '"colors":"Black",' +
    '"size":"L/14 US",' +
    '"details":"Standard fit for a relaxed, easy feel Fabric: 100% cotton Machine wash Imported Shown: Cactus Flower Style: CU8914-564.",' +
    '"price":55,' +
    '"discount":45,}';

// ///
// export default class Ingredient{
//     id: number;
//     name: string;
//     measure: string;
//
//     constructor(name:string, measure:string) {
//         this.id = lastId;
//         this.name = name;
//         this.measure = measure;
//         lastId++;
//     }
// }