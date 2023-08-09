import {sizes} from "../../../general/data/sizes";

export const fakeFullProduct = {
    "category": "T-shirts",
    "client_type": "Man",
    "colors": [
        {
            "color": "Black with print",
            "product_id": "7114",
            "product_thumb": "url/Base64.png"
        },
        {
            "color": "White",
            "product_id": "7142",
            "product_thumb": "url/Base64.png"
        },
        {
            "color": "Purple",
            "product_id": "7111",
            "product_thumb": "url/Base64.png"
        }
    ],
    "description": "The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",
    "details": "Standard fit for a relaxed, easy feel\nFabric: 100% cotton\nMachine wash\nImported\nShown: Cactus Flower\nStyle: CU8914-564",
    "discount": "0.0",
    "rating": "4",
    "price": "35.0",
    "product_id": "7142",
    "product_imgs": [
        "https://i.postimg.cc/kGCXQr61/img-1141.jpg",
        "https://i.postimg.cc/m25WRfLv/img-1111.jpg",
        "https://i.postimg.cc/9FMHvFhP/img-1121.jpg",
        "https://i.postimg.cc/XNx0HBT7/img-1131.jpg"
    ],
    "product_thumb": "url/Base64.png",
    "product_title": "Basic t-shirt",
    "size": [
        "S",
        "L",
        "XXL"
    ]
}


export const tempProductData = {
    idProduct: "1111",
    product_thumb: "img1111",
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