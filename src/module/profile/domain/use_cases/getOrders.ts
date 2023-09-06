import Order from "../model/Order";
import Repository from "../../data/fake_api/ProfileFakeRepository";

export default async function getOrders(token: string): Promise<Array<Order>>{
    return new Repository().getOrders(token);
}