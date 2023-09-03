import React from 'react';
import {Rating} from "react-simple-star-rating";
import style from "../presentation/PreviewProduct.module.css";

const PreviewProduct = (props: any) => {

    return (
        <div className={'col mb-4 ' + style.previewProd}>
            <a href={`/product/${props.article}`}>
                <img className={style.img} src={props.imageUrl} alt="Product"/>
            </a>
            <div className={style.p12}>
                {props.discountPercent > 0 ?
                <div className={style.discount}>-{props.discountPercent}%</div> : ''}
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
        </div>
    );
};

export default PreviewProduct;