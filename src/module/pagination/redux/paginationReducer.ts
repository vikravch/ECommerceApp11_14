import {Action} from "../../../general/redux/Action";
import {paginationData} from "../data/fakeData";
import {SET_DATA, START_DATA_LOAD} from "./asyncActions";
import {PaginationStore} from "./typesPagination";

export function paginationReducer(
    state: PaginationStore = {data: paginationData,
        isLoading: false,
        currentPage: paginationData.pageable.pageNumber
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

