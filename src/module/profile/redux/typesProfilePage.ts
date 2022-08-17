import Profile from "../domain/model/Profile";

export interface ProfileDetailsStore{
    profile: Profile,
    isLoading: boolean
}