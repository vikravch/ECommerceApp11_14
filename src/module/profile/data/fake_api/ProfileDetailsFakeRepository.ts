import ProfileDetailsRepository from "../../domain/ProfileDetailsRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";

export default class ProfileDetailsFakeRepository implements ProfileDetailsRepository{
    async getProfileDetails(uid: string): Promise<Profile> {
        //TODO fetch
        return new Promise((resolve => {
            resolve(new Profile("1221"));
        }))
    }

    async getProfileFake(): Promise<Profile> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Profile(getProfilePreviewStr))
            }, 2000);
        });
    }
}