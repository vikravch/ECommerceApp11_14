import {Action} from "../../../general/redux/Action";
import {SET_DATA, START_DATA_LOAD} from "./asyncActions";
import {PaginationStore} from "./typesPagination";
import {pageResponse} from "../data/fakeData";

export function paginationReducer(
    state: PaginationStore = {data: pageResponse,
        isLoading: false,
        currentPage: pageResponse.number
    }, action: Action
){
    switch (action.type){
        case START_DATA_LOAD:{
            console.log("case in reducer START_DATA_LOAD")
            return { ...state, isLoading: true}
        }
        case SET_DATA:{
            console.log("case in reducer SET_DATA")
            return {...state, isLoading: false}
        }

        default:
            return state;
    }
}

