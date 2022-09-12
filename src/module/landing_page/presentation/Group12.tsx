import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from "../styles/group12.module.scss";

const Group12 = (props: any
                 // imageAddCart: any;
                 // onClickAddCart: React.MouseEventHandler<HTMLDivElement> | undefined; imageUrl: string | undefined;
                 // article: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                 // title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                 // price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
) => {
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }
    return (
        <div className={styles.card}>
            <div className={styles.addToCart} onClick={props.onClickAddCart}>
                <img src={props.imageAddCart} alt="Bag_cart"/>
            </div>

            <img width={300} height={365} src={props.imageUrl} alt="Product"/>
            <div>
                <Rating size={25} emptyColor={"rgba(0, 0, 0, 0.1)"}
                        fillColor={"#568FFF"}  onClick={handleRating} ratingValue={rating}
                        initialValue={props.rating}/>
            </div>
            <h5 className="">{props.article}</h5>

            <div className="d-flex flex-row justify-content-between">
                <span>{props.title}</span>
                <b>{props.price}</b>
            </div>

        </div>
    );
};

export default Group12;