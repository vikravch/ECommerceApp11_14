import React from 'react';
import style from "./CollectionCard.module.css";

const CollectionCard = (props: any) => {

    //TODO on click:
    // Get a filtered list of products by collection name ?

    return (
        <div className={'col mb-4 previewProd'}>
                <img className={style.img} src={props.imageUrl} alt="collectionImg"/>
            <div className={'pt-2'}>
            </div>
            <div className={'row pt-1 fw-400'}>
                <h4>{props.name}</h4>
            </div>
        </div>
    );
};

export default CollectionCard;