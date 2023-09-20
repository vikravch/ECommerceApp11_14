import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCollectionDataAction} from "../../../collections/redux/asyncActions";
import {Store} from "../../../../general/redux/storeTypes";
import CollectionInfo from "../../../collections/types/CollectionInfo";

//TODO OnClick for collection items!

const Collection = (props:any) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCollectionDataAction(0))
    }, []);

    const collectionsData = useSelector<Store, Array<CollectionInfo>>(state => state.collectionPage.collectionData.content)

    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour">
                    Collection
                </button>
            </h2>
            <div id="flush-collapseFour" className={`accordion-collapse collapse ${!props.isButtonFilterVisible ? 'show' : ''}`}
                 aria-labelledby="flush-headingFour">
                <div className="accordion-body p-0 pb-4">
                    {collectionsData.map((item) =>
                        <div><input className="visually-hidden check" type="radio" name={'collection'} id={item.collection_id}/>
                            <label className="form-check-label pointer" htmlFor={item.collection_id}>{item.name}</label></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collection;