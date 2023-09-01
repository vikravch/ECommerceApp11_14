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

// export const fakeFullProduct = {
//     "category": "",
//     "client_type": "",
//     "colors": [{
//         "color": "",
//         "product_id": "",
//         "product_thumb": ""
//     }],
//     "description": "",
//     "details": "",
//     "discount": "",
//     "rating": "",
//     "price": "",
//     "product_id": "",
//     "product_imgs": [],
//     "product_thumb": "",
//     "product_title": "",
//     "size": []
// }


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

export const fakeProductData =
{
    "category": "Coats & Jackets",
    "colors": [
    {
        "color": "Copper",
        "product_id": "13",
        "product_thumb": "https://i.imgur.com/gRpTKWm.jpg"
    }
],
    "description": "Stay protected in harsh weather with our high-performance windbreaker jacket.",
    "details": "Slim fit\nFabric: Nylon with water-resistant coating\nHand wash only\nImported\nStyle: CJ5421-654",
    "discount": "0.00",
    "price": "73.00",
    "size": [
    "XXL",
    "XXXL",
    "S",
    "M",
    "L"
],
    "client_type": "MEN",
    "product_id": "13",
    "product_imgs": [
    "https://i.imgur.com/gRpTKWm.jpg",
    "https://i.imgur.com/gRpTKWm.jpg",
    "https://i.imgur.com/gRpTKWm.jpg"
],
    "product_thumb": "https://i.imgur.com/gRpTKWm.jpg",
    "product_title": "Lightweight Sports Anorak"
}

export const tempCartPr = {
    count: 1,
    colors: tempProductData.colors[0],
    size: tempProductData.size[0],
    idProduct: tempProductData.idProduct,
    product_thumb: tempProductData.product_imgs[0],
    product_title: tempProductData.product_title,
    rating: tempProductData.rating,
    price: tempProductData.price,
    discount: tempProductData.discount
}
