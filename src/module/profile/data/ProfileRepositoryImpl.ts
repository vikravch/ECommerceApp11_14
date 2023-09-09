import ProfileRepository from "../domain/ProfileRepository";
import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";
import api_client from "../../../general/data/api_client";
import {convertDateToOrderDate} from "../../../general/common/tools";

export default class ProfileRepositoryImpl implements ProfileRepository{
    async getProfile(token: string): Promise<Profile> {
        const headers = {"AccessToken": token};

        try {
            const response = await api_client.post<any>("/profile", {}, {headers});
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }

    async getOrders(token: string): Promise<Array<Order>> {
        const headers = {"AccessToken": token};

        try {
            const response = await api_client.post<any>("/profile/orders", {}, {headers});
            let res = new Array(response.data.length);
            for(let i = response.data.length-1, j = 0; i >= 0; i--, j++) {
                res[j] = response.data[i];
                res[j].order_status = (res[j].order_status.at(0)
                    + res[j].order_status.toLowerCase().substring(1)).replaceAll("_", " ");
                res[j].payment_method = String(res[j].payment_method).split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
                res[j].delivery_date = convertDateToOrderDate(res[j].delivery_date);
            }

            return response.data;
        } catch (error: any) {
            throw error;
        }
    }

    async updateProfile(updatedProfile: Profile): Promise<void> {
        return Promise.resolve(undefined);
    }
}