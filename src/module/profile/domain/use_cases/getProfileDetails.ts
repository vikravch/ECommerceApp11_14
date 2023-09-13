import Profile from "../model/Profile";
import Repository from "../../data/ProfileRepositoryImpl";

export default async function getProfileDetails(token: string, refreshToken: string): Promise<Profile>{
    return new Repository().getProfile(token, refreshToken);
}