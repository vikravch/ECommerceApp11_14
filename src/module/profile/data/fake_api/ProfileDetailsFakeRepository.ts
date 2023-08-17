import ProfileDetailsRepository from "../../domain/ProfileDetailsRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";
import Order, {orders, orders2} from "../../domain/model/Order";
import ArticleInfo from "../../../blog_page/domain/model/ArticlesList";
import {makeArrayOrders} from "../../domain/model/ProfilesAndOrders";
import api_client from "../../../../general/data/api_client";

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

    //https://ecommerce-project-haifa11.herokuapp.com/all_orders_get
    async getOrders(token:string): Promise<Array<Order>> {
        const response = await fetch(`${api_client}all_orders_get`)

        if(response.ok){
            console.log(response)
            const json = await response.json();
            console.log('this is json');
            try{
                makeArrayOrders(json);
                const ordersArr = JSON.parse(json) as Array<Order>;
                return Promise.resolve(ordersArr);
            } catch(err){
                return Promise.reject(err);
            }
        } else {
            return Promise.reject(new Error("Response failed"));
        }
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(JSON.parse(orders)); // TODO get '[]' if not exists
            }, 2000);
        });
    }
}