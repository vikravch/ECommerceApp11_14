import React from 'react';
import style from "./CollectionCard.module.css";
import {Link} from "react-router-dom";
import {convertToUnderscoreFormat} from "../../../general/common/tools";

const CollectionCard = (props: any) => {

    //TODO on click:
    // Get a filtered list of products by collection name
    // and redirect to catalogue with filter

    return (

        <div className={'col mb-1 previewProd'}>
            <Link className={style.link} to={'/catalog/' + convertToUnderscoreFormat(props.name)}>
                <img className={style.img} src={props.imageUrl} alt="collectionImg"/>
                <div className={'pt-2'}>
                </div>
                <div className={'row pt-1 fw-400'}>
                    <h4 className={style.name}>{props.name}</h4>
                </div>
            </Link>

        </div>
    );
};

export default CollectionCard;