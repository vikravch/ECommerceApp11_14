import React from 'react';
import styles from "../styles/group12.module.scss";

const Group12 = (props: {
    imageAddCart: any;
    onClickAddCart: React.MouseEventHandler<HTMLDivElement> | undefined; imageUrl: string | undefined; article: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className={styles.card}>
            <div className={styles.addToCart} onClick={props.onClickAddCart}>
                <img src={props.imageAddCart} alt="Bag_cart"/>
            </div>

            <img width={300} height={365} src={props.imageUrl} alt="Product"/>
            <div>
                <i className="text-primary fa fa-star fs-5"></i>
                <i className="text-primary fa fa-star fs-5"></i>
                <i className="text-primary fa fa-star fs-5"></i>
                <i className="text-muted fa fa-star fs-5"></i>
                <i className="text-muted fa fa-star fs-5"></i>
            </div>
            <h5 className="">{props.article}</h5>

            <div className="d-flex flex-row justify-content-between">
                <span>{props.title}</span>
                <b>{props.price}</b>
            </div>
            <div>
                {/*<img className={styles.plus} onClick={onClickPlus}src={isAdded ? "/img/btn-cheked.svg" : "/img/btn_plus.svg"} alt="Plus"/>*/}
            </div>

        </div>
    );
};

export default Group12;