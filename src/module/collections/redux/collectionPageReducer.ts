import {CollectionPageStore} from "../types/typesCollectionPage";
import {Action} from "../../../general/redux/Action";
import {fakeCollectionsResponse} from "../../landing_page/utils/constants";
import {SET_DATA} from "./asyncActions";

export function collectionPageReducer(
    state: CollectionPageStore = {
        collectionData: fakeCollectionsResponse, currentPage: 0, isLoading: false
    }, action : Action
) {
    switch (action.type) {
        case SET_DATA: {
            console.log("USE CASE")
            return {...state, collectionData: action.payload, isLoading: false}
        }
        default:
            return state;
    }
}