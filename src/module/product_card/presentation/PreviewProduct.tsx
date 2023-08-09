import React from 'react';
import {Rating} from "react-simple-star-rating";
import addCart from "../../landing_page/images/sumbol/bag_cart.svg";
import style from "../presentation/PreviewProduct.module.css";

const PreviewProduct = (props: any) => {

    return (
        <div className={'col mb-4 previewProd'}>
            <a href={`/product/${props.article}`}>
                <img className={style.img} src={props.imageUrl} alt="Product"/></a>
            <img className={style.add} src={addCart} alt="Add"
            />
            <div className={'pt-2'}>
                <Rating size={20} emptyColor={"rgba(0, 0, 0, 0.1)"}
                        fillColor={"#568FFF"}
                        allowHover={false}
                        readonly={true}
                        initialValue={props.rating}/>
            </div>
            <div className="art pt-2">#{props.article}</div>
            <div className={'row pt-1 fw-500'}>
                <div className={'col art c-black'}>{props.title}</div>
                <div className={'col price'}>${props.price}</div>
            </div>
        </div>
    );
};

export default PreviewProduct;