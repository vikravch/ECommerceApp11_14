import React, {useState} from 'react';
import styles from "../../landing_page/styles/group12.module.scss";
import {Rating} from "react-simple-star-rating";
import Image1 from "../../landing_page/images/group12/Image1.png";

const PreviewProduct = (props: any) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }

    return (
        <div className={'col mb-4 ps-4 previewProd'}>
            <a href={`/product/${props.id}`}>
                <img className={'images'} src={props.imageUrl} alt="Product"/>
                <img className={'add'} src={props.imageAddCart} alt="Add" onClick={(e)=> {
                    e.preventDefault();
                    console.log('addToCart');
                }}/>
            </a>
            <div className={'pt-2'}>
                <Rating size={25} emptyColor={"rgba(0, 0, 0, 0.1)"}
                        fillColor={"#568FFF"}  onClick={handleRating} ratingValue={rating}
                        initialValue={props.rating}/>
            </div>
            <div className="art pt-2">{props.article}</div>
            <div className={'row pt-1 fw-500'}>
                <div className={'col art c-black'}>{props.title}</div>
                <div className={'col price'}>{props.price}</div>
            </div>
        </div>
    );
};

export default PreviewProduct;