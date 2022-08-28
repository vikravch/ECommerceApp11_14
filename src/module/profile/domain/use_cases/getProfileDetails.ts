import Profile from "../model/Profile";
import Repository from "../../data/fake_api/ProfileDetailsFakeRepository";

export default async function getProfileDetails(token: string): Promise<Profile>{
    return new Repository().getProfileDetails(token);
}