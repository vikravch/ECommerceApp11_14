import ProfileDetailsRepository from "../../domain/ProfileDetailsRepository";
import Profile, {getProfilePreviewStr} from "../../domain/model/Profile";
import Order, {orders, orders2} from "../../domain/model/Order";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";
import ArticleInfo from "../../../blog_page/domain/model/ArticlesList";

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

    // async getOrders(token:string): Promise<Array<Order>> {
    //     const response = await fetch(`${DOMAIN_NAME}all_orders_get`)
    //
    //     if(response.ok){
    //         console.log(response)
    //         const json = await response.json();
    //         try{
    //             const resArticleList = JSON.parse(json) as Array<ArticleInfo>;
    //             return Promise.resolve(resArticleList);
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