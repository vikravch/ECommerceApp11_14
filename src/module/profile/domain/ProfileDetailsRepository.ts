import Profile from "./model/Profile";
import Order from "./model/Order";


export default interface ProfileDetailsRepository{
    getProfileDetails: (token: string) => Promise<Profile>;
    getProfileFake: (token: string) => Promise<Profile>;
    getOrdersFake: (token: string) => Promise<Array<Order>>;
}