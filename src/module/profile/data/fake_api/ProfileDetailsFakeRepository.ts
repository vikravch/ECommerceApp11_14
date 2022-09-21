import ProfileDetailsRepository from "../../domain/ProfileDetailsRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";
import Order, {orders} from "../../domain/model/Order";

export default class ProfileDetailsFakeRepository implements ProfileDetailsRepository{
    async getProfileDetails(token: string): Promise<Profile> {
        //TODO fetch
        return new Promise((resolve => {
            resolve(new Profile("1221"));
        }))
    }

    async getProfileFake(token: string): Promise<Profile> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Profile(JSON.parse(getProfilePreviewStr)))
            }, 2000);
        });
    }

    async getOrdersFake(token:string): Promise<Array<Order>> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(JSON.parse(orders)); // TODO get '[]' if not exists
            }, 2000);
        });
    }
}