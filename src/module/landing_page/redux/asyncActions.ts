import Repository from "../data/fake_api/LandingPageFakeRepository";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";

export const getArrivalDetailsAction = (pageNumber:number):any => {
    return (dispatch:Function) => {
        console.log("getProductDetailsAction")
        dispatch(startLoadAction());
        new Repository().getNewArrivals(pageNumber).then((data)=>{
             // console.log(JSON.stringify(data));
            dispatch(setDataAction(data));
            dispatch(stopLoadAction());
        });
    }
};
export const START_LOADING = "start_new_arrivals_load";
export const SET_DATA = "set_new_arrivals";
export const STOP_LOADING ='stop_loading';
export const SET_CURRENT_NEWARRIVALS_PAGE = 'set_newarrivals_page';

export const startLoadAction = () => ({
        type: START_LOADING
    });

export const stopLoadAction = () => ({
    type: STOP_LOADING
});
export const setDataAction = (data: ApiResponseProductPreview ) => ({
    type: SET_DATA,
    payload: data
})


export const setNewArrivalsPaginationPage = (page:number) => ({
    type: SET_CURRENT_NEWARRIVALS_PAGE,
    payload: page
})