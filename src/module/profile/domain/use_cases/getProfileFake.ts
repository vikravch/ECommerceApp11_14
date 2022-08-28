import ProfileDetailsFakeRepository from "../../data/fake_api/ProfileDetailsFakeRepository";
import Profile from "../model/Profile";

export default async function getProfileFake(token:string): Promise<Profile>{
    return new ProfileDetailsFakeRepository().getProfileFake(token);
}