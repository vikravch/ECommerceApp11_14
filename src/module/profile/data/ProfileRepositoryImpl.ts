import ProfileRepository from "../domain/ProfileRepository";
import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";
import api_client from "../../../general/data/api_client";

export default class ProfileRepositoryImpl implements ProfileRepository{
    async getProfile(token: string): Promise<Profile> {
        const headers = {
            "AccessToken": token};

        try {
            const response = await api_client.post<any>("/profile", {}, {headers});
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }

    async getOrders(token: string): Promise<Array<Order>> {
        return Promise.resolve([]);
    }

    async updateProfile(updatedProfile: Profile): Promise<void> {
        return Promise.resolve(undefined);
    }
}