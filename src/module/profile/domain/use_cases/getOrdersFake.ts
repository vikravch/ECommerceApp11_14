import Order from "../model/Order";
import ProfileDetailsFakeRepository from "../../data/fake_api/ProfileDetailsFakeRepository";

export default async function getOrdersFake(token: string): Promise<Array<Order>>{
    return new ProfileDetailsFakeRepository().getOrdersFake(token);
}