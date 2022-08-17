import Profile from "./model/Profile";


export default interface ProfileDetailsRepository{
    getProfileDetails: (uid: string) => Promise<Profile>;
}