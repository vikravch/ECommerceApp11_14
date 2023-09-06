import Profile from "../model/Profile";
import Repository from "../../data/fake_api/ProfileFakeRepository";

export default async function updateProfile(data: Profile): Promise<any> {
    return new Repository().updateProfile(data);
}