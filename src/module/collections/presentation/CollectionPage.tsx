import React, {useEffect} from 'react';
import styles from "./CollectionPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Skeleton from "../../category/presentation/Skeleton";
import CollectionCard from "./CollectionCard";
import {fakeCollectionsResponce} from "../../landing_page/utils/constants";
import {getCollectionDataAction} from "../redux/asyncActions";
import CollectionInfo from "../types/CollectionInfo";


const CollectionPage = () => {
    console.log("collection PAGE")
    const dispatch = useDispatch()
    const isLoading = useSelector<Store, boolean>(
        state => state.productPage.isLoading
    );
    const collectionsData = useSelector<Store, Array<CollectionInfo>>(state => state.collectionPage.collectionData.content)
   // const collectionsData = fakeCollectionsResponce.content
    const currentPage = useSelector<Store, number>(state => state.collectionPage.currentPage);

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>);

    useEffect(() => {
        dispatch(getCollectionDataAction(currentPage))
        if (currentPage) {
            console.log("Use Effect Coll 2")
            dispatch(getCollectionDataAction(currentPage));
        }
    }, [currentPage]);

    return (<div>
        <h3 className={styles.header}>Collections:</h3>
        <div>
            <div className={'col p-0 ps-5'}>
                <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                    {isLoading ? skeletons : collectionsData.map((product, id) =>
                        <CollectionCard
                            key={id}
                            id={id}
                            imageUrl={product.img_url}
                            name={product.name}
                            collection_id={product.collection_id}
                        />
                    )}
                </div>
            </div>
        </div>

    </div>)
};

export default CollectionPage;