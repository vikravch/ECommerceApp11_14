import React from 'react';
import OrderProduct from "../../domain/model/OrderProduct";

interface Props{
    product: OrderProduct;
}

const ProductItem:React.FC<Props> = (props: Props) => {
    let product = props.product;

    return (
        <div className={"col-6 col-sm-4 mt-4 p-0"}>
            <div className={"row flex-row m-0 "}>
                <a href={`/product/${product.product_id}`} className={"col-12 col-md-auto p-0 ps-md-3 pe-md-3"}>
                    <img src={product.product_thumb} className={"preview"} alt="product"/>
                </a>
                <div className={"col p-0"}>
                    <div className={"gray"}>#{product.product_id}</div>
                    <div className={"prodName"}>{product.product_title}</div>
                    <div className={"gray"}>Color: <span className={"textBlack"}>{product.color}</span></div>
                    <div className={"gray"}>Size: <span className={"textBlack"}>{product.size}</span></div>
                    <div className={"gray"}>Quantity: <span className={"textBlack"}>{product.quantity}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;