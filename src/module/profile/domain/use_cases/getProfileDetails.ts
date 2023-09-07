import Profile from "../model/Profile";
import Repository from "../../data/fake_api/ProfileFakeRepository";
// import Repository from "../../data/ProfileRepositoryImpl";

export default async function getProfileDetails(token: string): Promise<Profile>{
    return new Repository().getProfile(token);
}