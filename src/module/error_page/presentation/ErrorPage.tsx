import React from 'react';
import {Link, useParams} from "react-router-dom";
import style from "./ErrorPage.module.css";
import AlsoLike from "../../product_page/presentation/AlsoLike";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import SpinnerShort from "../../spinner/SpinnerShort";

const ErrorPage = () => {
    const {message} = useParams<string>();
    const {status} = useParams<string>();
    const isLoading = useSelector<Store, boolean>(state => state.productPage.isLoading);

    return (
        <>
            <div className={"container p-0"} style={{minWidth: 320}}>
                <p className={style.main}>Main / <span className={'black'}>Error</span></p>
                <h1 className={style.error}>Error {status? status : ''}</h1>
                <div className={style.msg}>{message ? decodeURIComponent(message) : 'An error occurred.'}</div>
                <Link to="/" className={`btn btn-lg ${style.btn}`}>
                    Go to main page
                </Link>
                <AlsoLike/>
            </div>
            {isLoading ? <SpinnerShort/> : null}
        </>
    );
};

export default ErrorPage;