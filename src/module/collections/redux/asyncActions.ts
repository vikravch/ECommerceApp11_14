import {ApiResponseCollections} from "../../../general/dto/APIResponseTypes";
import Repository from '../CollectionPageRepository'


export const SET_DATA = "set_collections";

export const setDataAction = (data: ApiResponseCollections ) => ({
    type: SET_DATA,
    payload: data
})


export const getCollectionDataAction = (pageNumber:number):any => {
    return (dispatch:Function) => {
        console.log("getProductDetailsAction")
       // dispatch(startLoadAction());
        new Repository().getCollections(pageNumber).then((data)=>{
            // console.log(JSON.stringify(data));
            //dispatch(setDataAction(data));
           // dispatch(stopLoadAction());
        });
    }
};

