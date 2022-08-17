import getProfileDetails from "../domain/use_cases/getProfileDetails";
import Profile from "../domain/model/Profile";

export const getProfileDetailsAction = (uid: string) :any => {
    return (dispatch: Function) => {
        dispatch(startProfileLoadAction());
        getProfileDetails(uid).then((data) => {
            console.log(JSON.stringify(data));
            dispatch(setProfileDataAction(data));
        })
    }
}

export const START_PROFILE_LOAD = 'start_profile_load';
export const SET_PROFILE_DATA = 'set_profile_data';

export const startProfileLoadAction = () => ({
    type: START_PROFILE_LOAD
});

export const setProfileDataAction = (data: Profile) => ({
    type: SET_PROFILE_DATA,
    payload: data
});

