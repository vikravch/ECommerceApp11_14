import {sizes} from "../../../general/data/sizes";
import CartProduct from "../../cart/domain/model/CartProduct";
import {inspect} from "util";

export const tempProductData = {
    idProduct: "1111",
    product_main_img: "img1111",
    product_imgs: ["https://i.postimg.cc/m25WRfLv/img-1111.jpg", "https://i.postimg.cc/kGCXQr61/img-1141.jpg", "https://i.postimg.cc/9FMHvFhP/img-1121.jpg", "https://i.postimg.cc/XNx0HBT7/img-1131.jpg"],
    product_title: "Tshirt",
    description: "Bla bla",
    rating: "4",
    colors: ["Black", "Blue", "Brown", "White"],
    size: sizes,
    details: "details hkjfh dfjjf kfdjk",
    price: 35,
    discount: 45,


}

export const tempCartPr = {
    count: 1,
    colors: tempProductData.colors[0],
    size: tempProductData.size.S,
    idProduct: tempProductData.idProduct,
    product_thumb: tempProductData.product_imgs[0],
    product_title: tempProductData.product_title,
    rating: tempProductData.rating,
    price: tempProductData.price,
    discount: tempProductData.discount
}

export const tempProductDataJSON = '{' +
    '"idProduct":"1111",' +
    '"product_main_img":"img_1111.jpg",' +
    '"product_imgs": [img_1131.jpg, img_1141.jpg],' +
    '"product_title":"Basic T-shirt",' +
    '"description":"The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",' +
    '"rating":"4",' +
    '"colors":"Black",' +
    '"details":"Standard fit for a relaxed, easy feel Fabric: 100% cotton Machine wash Imported Shown: Cactus Flower Style: CU8914-564.",' +
    '"price":"55",' +
    '"discount":"45",' +
    '}';

export const tempProductPreviewData = '{' +
    '"idProduct":"1111",' +
    '"product_thumb":"img_1111.jpg",' +
    '"product_title":"Basic T-shirt",' +
    '"rating":"4",' +
    '"price":"55",' +
    '"discount":"45",' +
    '}';