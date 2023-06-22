import React, {useState} from 'react';
import {Rating} from "react-simple-star-rating";
import addCart from "../../landing_page/images/sumbol/bag_cart.svg"
import {addToCartAction} from "../../cart/redux/asyncActions";
import {useDispatch} from "react-redux";

const PreviewProduct = (props: any) => {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();
    const handleRating = (rate: number) => {
        setRating(rate)

    }

    //TODO add discount icon to product card

    return (
        <div className={'col mb-4 ps-4 previewProd'}>
            <a href={`/product/${props.article}`}>
                <img className={'images'} src={props.imageUrl} alt="Product"/></a>
            <img className={'add'} src={addCart} alt="Add" onClick={() => dispatch(addToCartAction({
                count: 1,
                color: "Black",
                size: "M",
                idProduct: props.article,
                product_thumb: props.product_thumb,
                product_title: props.product_title,
                rating: props.rating,
                price: Math.round(props.price),
                discount: props.discount
            }))}/>

            <div className={'pt-2'}>
                <Rating size={25} emptyColor={"rgba(0, 0, 0, 0.1)"}
                        fillColor={"#568FFF"} onClick={handleRating}
                        //ratingValue={rating}
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