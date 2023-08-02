import Repository from "../data/fake_api/LandingPageFakeRepository";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";

export const getArrivalDetailsAction = (pageNumber:number):any => {
    return (dispatch:Function) => {
        console.log("getProductDetailsAction")
        dispatch(startLoadAction());
        new Repository().getNewArrivals(pageNumber).then((data)=>{
            // console.log(JSON.stringify(data));
            dispatch(setDataAction(data));
        });
    }
};
export const START_LOADING = "start_new_arrivals_load";
export const SET_DATA = "set_new_arrivals";

export const startLoadAction = () => ({
        type: START_LOADING
    });
export const setDataAction = (data: ApiResponseProductPreview ) => ({
    type: SET_DATA,
    payload: data
})
