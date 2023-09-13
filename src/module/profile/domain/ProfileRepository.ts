import Profile from "./model/Profile";
import Order from "./model/Order";

export default interface ProfileRepository {
    getProfile: (token: string, refreshToken: string) => Promise<Profile>;
    getOrders: (token: string, refreshToken: string) => Promise<Array<Order>>;
    updateProfile: (updatedProfile: Profile) => Promise<void>;
}