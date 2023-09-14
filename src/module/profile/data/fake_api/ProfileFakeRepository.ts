import ProfileRepository from "../../domain/ProfileRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";
import Order, {orders} from "../../domain/model/Order";
import {convertDateToOrderDate} from "../../../../general/common/tools";

export default class ProfileFakeRepository implements ProfileRepository{
    async getProfile(token: string, refreshToken: string): Promise<Profile> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Profile(JSON.parse(getProfilePreviewStr)))
            }, 1000);
        });
        // const errorResponse = {response: {data: {status: 200, message: 'Custom error message from server'}}};
        // return Promise.reject(errorResponse);
    }

    async getOrders(token:string, refreshToken: string): Promise<Array<Order>> {
        return new Promise(resolve => {
            setTimeout(() => {
                const ordersArray = JSON.parse(orders);
                let res = new Array(ordersArray.length);
                for(let i = ordersArray.length-1, j = 0; i >= 0; i--, j++) {
                    res[j] = ordersArray[i];
                    res[j].order_status = (res[j].order_status.at(0)
                        + res[j].order_status.toLowerCase().substring(1)).replaceAll("_", " ");
                    res[j].payment_method = String(res[j].payment_method).split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
                    res[j].delivery_date = convertDateToOrderDate(res[j].delivery_date);
                }
                resolve(res);
            }, 1000);
        });
    }

    async updateProfile(updatedProfile: Profile): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

}