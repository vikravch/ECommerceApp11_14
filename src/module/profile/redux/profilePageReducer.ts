import {ProfilePageStore} from "./typesProfilePage";
import {Action} from "../../../general/redux/Action";
import Profile from "../domain/model/Profile";
import {CLEAN_DATA, SET_ORDERS, SET_PROFILE, START_LOAD, STOP_LOAD} from "./asyncActions";
import {initialProfile} from "../data/InitialState";

export function profilePageReducer(
    state: ProfilePageStore = {profile: new Profile(initialProfile), orders: [], isLoading: false},
    action: Action){

    switch(action.type) {
        case START_LOAD:
            return {...state, isLoading: true};
        case STOP_LOAD:
            return {...state, isLoading: false};
        case SET_PROFILE:
            return {...state, profile: action.payload, isLoading: false};
        case CLEAN_DATA:
            return {profile: new Profile(initialProfile), orders: [], isLoading: false};
        case SET_ORDERS:
            return {...state, orders: action.payload, isLoading: false};
        default:
            return state;
    }
}