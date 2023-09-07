import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";

export interface ProfilePageStore {
    profile: Profile,
    orders: Array<Order>,
    isLoading: boolean
}