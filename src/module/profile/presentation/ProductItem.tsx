import React from 'react';
//import CartProduct from "../../cart/domain/model/CartProduct";

interface Props{
    //product: CartProduct;
    product: any;
}

const ProductItem:React.FC<Props> = (props: Props) => {
    let product = props.product;

    return (
        <div className={"col-4 mt-4 p-0"}>
            <div className={"row row-cols-auto"}>
                <div className={"col ps-3 pe-3"}>
                    <a href={`/product/${product.idProduct}`}>
                    <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"} alt="product"/></a>
                </div>
                <div className={"col p-0"}>
                    <div className={"gray"}>#{product.idProduct}</div>
                    <div className={"prodName"}>{product.product_title}</div>
                    <div className={"gray"}>Color: <span className={"textBlack"}>{product.color}</span></div>
                    <div className={"gray"}>Size: <span className={"textBlack"}>{product.size}</span></div>
                    <div className={"gray"}>Quantity: <span className={"textBlack"}>{product.count}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;