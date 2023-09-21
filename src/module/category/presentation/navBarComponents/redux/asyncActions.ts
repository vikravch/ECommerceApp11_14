import {Dispatch} from "react";
import api_client from "../../../../../general/data/api_client";
import {ApiResponseCategoryList, ApiSeasonsList} from "../../../../../general/dto/APIResponseTypes";
import {SET_CATEGORY_LIST, SET_SEASONS_LIST} from "../../../redux/asyncActions";
import {seasonsList} from "../../../constants";


const headers = {
    'Content-Type': 'application/json',
};

export const setCategories = (data: ApiResponseCategoryList ) => ({
    type: SET_CATEGORY_LIST,
    payload: data
});

export const setSeasons = (data: string[] ) => ({
    type: SET_SEASONS_LIST,
    payload: data
});

export const getCategoriesList = (): any => async (dispatch: Dispatch<any>) => {

    try {
        console.log("BEFORE getCatList");
        const response = await api_client.get<ApiResponseCategoryList>(`/products/categories`, {headers});
        console.log("after getCatList");
        console.log(response.data);
        console.log(response);

        dispatch(setCategories(response.data))
        return response.data;
    } catch (error: any) {
        console.log("ERROR: ");
        console.log(error.message);
        throw error;
      //  return new Promise<ApiResponseCategoryList>((resolve) => {
          //  console.log("getCategoriesList - setting the FAKE list");
            //const fakeData = new ApiResponseCategoryList(categoryData)
           // dispatch(setCategories(categoryData); // not setting
           // resolve(new ApiResponseCategoryList(categoryData));
        //})
    }
}

export const getSeasonsList = (): any => async (dispatch: Dispatch<any>) => {

    try {
        console.log("BEFORE getSeasonList");
        const response = await api_client.get<ApiSeasonsList>(`/products/seasons`, {headers});
        console.log("after getSeasonList");
        console.log(response.data);
        console.log(response);

        dispatch(setSeasons(response.data.seasons))
        return response.data;
    } catch (error: any) {
        console.log("ERROR: ");
        console.log(error.message);
      //  throw error;

         return new Promise<ApiSeasonsList>((resolve) => {
         console.log("get seasons list - setting the FAKE list");
        const fakeData = new ApiSeasonsList(seasonsList)
        dispatch(setSeasons(fakeData.seasons))
        resolve(new ApiSeasonsList(fakeData));
        })
    }
}
