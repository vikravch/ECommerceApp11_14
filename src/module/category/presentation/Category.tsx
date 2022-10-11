import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {useParams} from "react-router-dom";
import {getProdustsByCategory} from "../redux/asyncActions";
import Group12 from "../../landing_page/presentation/Group12";
import addCart from "../../landing_page/images/sumbol/bag_cart.svg"
import {addToCartAction} from "../../cart/redux/asyncActions";


const Category: React.FC = () => {
    const {category} = useParams<string>();
    const products = useSelector<Store, Array<ProductPreviewInfo>>(state => state.categoryPage.data);
    const isLoading = useSelector<Store, boolean>(state => state.categoryPage.isLoading)
    const dispatch = useDispatch();

    useEffect(() => {
           if (category) {
                dispatch(getProdustsByCategory(category))
           }
    }, [category]);

    return (
        (products)?(
        <div className="content p-40">
            <div className="d-flex flex-wrap">
                {products.map((product,productId) =>
                        <Group12
                            key={productId}
                            imageUrl="http://via.placeholder.com/365x300"
                            title={product.product_title}
                            article={product.idProduct}
                            price={Math.round(product.price)}
                            rating={product.rating}
                            imageAddCart={addCart}
                            onClickAddCart={()=> dispatch(addToCartAction({
                                count:1,
                                color:"Black",
                                size:"M",
                                idProduct: product.idProduct,
                                product_thumb: product.product_thumb,
                                product_title: product.product_title,
                                rating: product.rating,
                                price: Math.round(product.price),
                                discount: product.discount
                            }))}
                        />)}
            </div>

        </div>):<div>Loading...</div>
    );
};

export default Category;