import React, {useEffect} from 'react';
import styles from "./CollectionPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import CollectionCard from "./CollectionCard";
import {getCollectionDataAction} from "../redux/asyncActions";
import CollectionInfo from "../types/CollectionInfo";
import Spinner from "../../spinner/Spinner";


const CollectionPage = () => {
    console.log("collection PAGE")
    const dispatch = useDispatch()
    const isLoading = useSelector<Store, boolean>(
        state => state.collectionPage.isLoading
    );
    const collectionsData = useSelector<Store, Array<CollectionInfo>>(state => state.collectionPage.collectionData.content)
   // const collectionsData = fakeCollectionsResponce.content
    const currentPage = useSelector<Store, number>(state => state.collectionPage.currentPage);

    useEffect(() => {
        dispatch(getCollectionDataAction(currentPage))
        if (currentPage) {
            console.log("Use Effect Coll 2")
            dispatch(getCollectionDataAction(currentPage));
        }
    }, [currentPage]);

    return (
        <>
        {isLoading ? <Spinner/> :
        <div className={'container p-0'}>
            <h3 className={styles.header}>Collections / <span className={'black'}>All</span></h3>
            <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                {collectionsData.map((product, id) =>
                    <CollectionCard
                        key={id}
                        id={id}
                        imageUrl={product.img_url}
                        name={product.name}
                        collection_id={product.collection_id}
                    />)}
            </div>
        </div>}
        </>)
};

export default CollectionPage;