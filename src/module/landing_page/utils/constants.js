import Image1 from '../images/group12/Image1.png'
import Image2 from '../images/group12/Image2.png'
import Image3 from '../images/group12/Image3.png'
import Image4 from '../images/group12/Image4.png'
import Image5 from '../images/group12/Image5.png'
import Image6 from '../images/group12/Image6.png'
import Image7 from '../images/group12/Image7.png'
import Image8 from '../images/group12/Image8.png'
import Image9 from '../images/group12/Image9.png'
import Image10 from '../images/group12/Image10.png'
import Image11 from '../images/group12/Image11.png'
import Image12 from '../images/group12/Image12.png'
import addCart from '../images/sumbol/bag_cart.svg'

export const productsResponse = {
    "content": [
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 37.00,
            "product_id": "187",
            "product_thumb": "https://i.imgur.com/iFSd1ic.png",
            "product_title": "MOCK Yoga Bike Shorts"
        },
        {
            "discount": 5.00,
            "rating": 5.00,
            "price": 110.50,
            "product_id": "180",
            "product_thumb": "https://i.imgur.com/fQuttOV.jpg",
            "product_title": "Crossfit Training Onesie"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 82.00,
            "product_id": "183",
            "product_thumb": "https://i.imgur.com/aN3hwFc.jpg",
            "product_title": "Racerback Performance Romper"
        },
        {
            "discount": 10.00,
            "rating": 5.00,
            "price": 68.50,
            "product_id": "223",
            "product_thumb": "https://i.imgur.com/ixzbjE6.jpg",
            "product_title": "Yoga Oversized Sunnies"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 105.50,
            "product_id": "181",
            "product_thumb": "https://i.imgur.com/Hf982Ml.jpg",
            "product_title": "Basketball One-piece Uniform"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 50.00,
            "product_id": "182",
            "product_thumb": "https://i.imgur.com/Cn9sKOm.jpg",
            "product_title": "Sleeveless Fitness Jumpsuit"
        },
        {
            "discount": 15.00,
            "rating": 5.00,
            "price": 55.50,
            "product_id": "184",
            "product_thumb": "https://i.imgur.com/jbT7zj8.jpg",
            "product_title": "Active Short Romper"
        },
        {
            "discount": 5.00,
            "rating": 5.00,
            "price": 76.50,
            "product_id": "188",
            "product_thumb": "https://i.imgur.com/fxYCBpe.jpg",
            "product_title": "Performance Running Shorts"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 101.00,
            "product_id": "186",
            "product_thumb": "https://i.imgur.com/jbT7zj8.jpg",
            "product_title": "Mesh Panel Track Jumpsuit"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 99.00,
            "product_id": "179",
            "product_thumb": "https://i.imgur.com/aZZ1c99.png",
            "product_title": "Seamless Yoga T-shirt"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 72.00,
            "product_id": "177",
            "product_thumb": "https://i.imgur.com/xEsE2QP.png",
            "product_title": "Basic T-shirt"
        },
        {
            "discount": 0.00,
            "rating": 5.00,
            "price": 92.50,
            "product_id": "178",
            "product_thumb": "https://i.imgur.com/fkS6pv5.png",
            "product_title": "Mesh Panel Running Tee"
        }
    ],
    "pageable": {
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 12,
        "unpaged": false,
        "paged": true
    },
    "last": false,
    "totalElements": 223,
    "totalPages": 19,
    "size": 12,
    "number": 0,
    "sort": {
        "empty": false,
        "sorted": true,
        "unsorted": false
    },
    "first": true,
    "numberOfElements": 12,
    "empty": false
}

export  const products2 = [
    {
        idProduct: "001",
        product_thumb:Image1,
        product_title:"Airlift Bra",
        price: 35,
        rating:3,
        discount:50
    },
    {
        idProduct: "002",
        product_thumb:Image2,
        product_title:"Airlift Bra",
        price: 35,
        rating:3,
        discount:0
    },
    {
        idProduct: "003",
        product_thumb:Image3,
        product_title:"Airlift Bra",
        price: 35,
        rating:3,
        discount:0
    },
    {
        idProduct: "004",
        product_thumb:Image4,
        product_title:"Airlift Bra",
        price: 35,
        rating:3,
        discount:0
    }]

export  const fakeProducts = [
    {
        productId: "001",
        imageUrl:Image1,
        title:"Airlift Bra",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:3
    },
    {
        productId: "002",
        imageUrl:Image2,
        title:"Basic t-shirt",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:2
    },
    {
        productId: "003",
        imageUrl:Image3,
        title:"Nike One",
        price: "$680",
        article:"#7142",
        imgAddCart: addCart,
        rating:5
    },
    {
        productId: "004",
        imageUrl:Image4,
        title:"Tracksuit Jacket",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:1
    },
    {
        productId: "005",
        imageUrl:Image5,
        title:"French Terry Shorts",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:1
    },
    {
        productId: "006",
        imageUrl:Image6,
        title:"Sportwear",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:3
    },
    {
        productId: "007",
        imageUrl:Image7,
        title:"Cropped Jacket",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:1
    },
    {
        productId: "008",
        imageUrl:Image8,
        title:"Hotspur",
        price: "$35",
        article:"#7142",
        imgAddCart: addCart,
        rating:5
    },
    {
        productId: "009",
        imageUrl:Image9,
        title:"Basic t-shirt",
        price: "$45",
        article:"#7142",
        imgAddCart: addCart,
        rating:0
    },
    {
        productId: "0010",
        imageUrl:Image10,
        title:"Fleece Trousers",
        price: "$356",
        article:"#7142",
        imgAddCart: addCart,
        rating:2
    },
    {
        productId: "0011",
        imageUrl:Image11,
        title:"Women's Shorts",
        price: "$125.90",
        article:"#7142",
        imgAddCart: addCart,
        rating:2
    },
    {
        productId: "0012",
        imageUrl:Image12,
        title:"Basic t-shirt",
        price: "$35.45",
        article:"#7142",
        imgAddCart: addCart,
        rating:1
    },

]

export const fakeCollectionsResponse = {
    "content": [
        {
            "name": "MOCK Names at Neiman's",
            "collection_id": "1",
            "img_url": "https://i.imgur.com/of0fltu.png"
        },
        {
            "name": "Lux Essentials",
            "collection_id": "2",
            "img_url": "https://i.imgur.com/mvKPOlp.png"
        },
        {
            "name": "Exclusives",
            "collection_id": "3",
            "img_url": "https://i.imgur.com/SgNxUf9.png"
        },
        {
            "name": "Active Energy",
            "collection_id": "4",
            "img_url": "https://i.imgur.com/hO6ZV3l.png"
        },
        {
            "name": "Power Flex",
            "collection_id": "5",
            "img_url": "https://i.imgur.com/cx8QHZE.png"
        },
        {
            "name": "Endurance Pro",
            "collection_id": "6",
            "img_url": "https://i.imgur.com/n7adJ7B.png"
        },
        {
            "name": "Flex Fit",
            "collection_id": "7",
            "img_url": "https://i.imgur.com/kkTOrTq.png"
        },
        {
            "name": "Speed Force",
            "collection_id": "8",
            "img_url": "https://i.imgur.com/RLLI5Kv.png"
        },
        {
            "name": "Stamina Max",
            "collection_id": "9",
            "img_url": "https://i.imgur.com/bOOKXr9.png"
        },
        {
            "name": "AeroFlex",
            "collection_id": "10",
            "img_url": "https://i.imgur.com/W4hkMRj.jpg"
        },
        {
            "name": "Performance X",
            "collection_id": "11",
            "img_url": "https://i.imgur.com/iFSd1ic.png"
        },
        {
            "name": "Motion Tech",
            "collection_id": "12",
            "img_url": "https://i.imgur.com/of0fltu.png"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 12,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 3,
    "totalElements": 33,
    "size": 12,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 12,
    "empty": false
}

export const fakeCartResponse = {
    "cart": [
        {
            "color": "Navy Blue",
            "quantity": 3,
            "discount": 0,
            "price": 52,
            "size": "M",
            "product_id": 14,
            "product_thumb": "https://i.imgur.com/izhck6B.jpg",
            "product_title": "Thermal Running Coat",
            "stock_sizes": [
                "XS",
                "M",
                "XL"
            ],
            "stock_quantity": 3
        },
        {
            "color": "Champagne",
            "quantity": 1,
            "discount": 15,
            "price": 38.5,
            "size": "S",
            "product_id": 55,
            "product_thumb": "https://i.imgur.com/Hf982Ml.jpg",
            "product_title": "Sleeveless Fitness Jumpsuit",
            "stock_sizes": [
                "XXL",
                "S",
                "M",
                "L",
                "XL"
            ],
            "stock_quantity": 2
        },
        {
            "color": "Navy Blue",
            "quantity": 1,
            "discount": 5,
            "price": 48.5,
            "size": "36",
            "product_id": 110,
            "product_thumb": "https://i.imgur.com/ACIfa8E.jpg",
            "product_title": "Crossfit Training Shoes",
            "stock_sizes": [
                "39",
                "42",
                "36"
            ],
            "stock_quantity": 4
        },
        {
            "color": "Mint Green",
            "quantity": 1,
            "discount": 0,
            "price": 61,
            "size": "One size",
            "product_id": 148,
            "product_thumb": "https://i.imgur.com/QwydTK4.jpg",
            "product_title": "Running Polarized Sunglasses",
            "stock_sizes": [
                "One size"
            ],
            "stock_quantity": 3
        }
    ],
    "subtotal_price": 324,
    "products_discount": 20,
    "total_price": 304
}