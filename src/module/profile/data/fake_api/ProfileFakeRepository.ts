import ProfileRepository from "../../domain/ProfileRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";
import Order, {orders} from "../../domain/model/Order";

export default class ProfileFakeRepository implements ProfileRepository{
    async getProfile(token: string): Promise<Profile> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Profile(JSON.parse(getProfilePreviewStr)))
            }, 1000);
        });
        // const errorResponse = {response: {data: {status: 200, message: 'Custom error message from server'}}};
        // return Promise.reject(errorResponse);
    }

    async getOrders(token:string): Promise<Array<Order>> {
        return new Promise(resolve => {
            setTimeout(() => {
                const ordersArray = JSON.parse(orders);
                let res = new Array(ordersArray.length);
                for(let i = ordersArray.length-1, j = 0; i >= 0; i--, j++){
                    ordersArray[i].order_status = ordersArray[i].order_status.replaceAll("_", " ");
                    ordersArray[i].order_status = ordersArray[i].order_status.at(0)
                        + ordersArray[i].order_status.toLowerCase().substring(1);
                    ordersArray[i].payment_method = String(ordersArray[i].payment_method).split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
                    res[j] = ordersArray[i];
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

    //import {makeArrayOrders} from "../../domain/model/Notes";
    // import api_client from "../../../../general/data/api_client";
    //https://ecommerce-project-haifa11.herokuapp.com/all_orders_get
    // async getOrders(token:string): Promise<Array<Order>> {
    //     const response = await fetch(`${api_client}all_orders_get`)
    //
    //     if(response.ok){
    //         console.log(response)
    //         const json = await response.json();
    //         console.log('this is json');
    //         try{
    //             makeArrayOrders(json);
    //             const ordersArr = JSON.parse(json) as Array<Order>;
    //             return Promise.resolve(ordersArr);
    //         } catch(err){
    //             return Promise.reject(err);
    //         }
    //     } else {
    //         return Promise.reject(new Error("Response failed"));
    //     }
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(JSON.parse(orders)); // TODO get '[]' if not exists
    //         }, 2000);
    //     });
    // }
}