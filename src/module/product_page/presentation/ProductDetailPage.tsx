import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../domain/model/Product";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";

const ProductDetailPage:React.FC = ()=> {
    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(
        state => state.productPage.product
    );
    const isLoading = useSelector<Store,boolean>(
        state => state.productPage.isLoading
    );
    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(getProductDetailsAction(productId))
            /*getProductDetails(productId).then((data)=>{
                console.log(data);
            })*/
        }
    },[productId]);

    return (<div>
        <h1>Hello!</h1>
    </div>);
}
export default ProductDetailPage;