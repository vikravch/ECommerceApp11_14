import Order from "../model/Order";
import Repository from "../../data/ProfileRepositoryImpl";

export default async function getOrders(token: string, refreshToken: string): Promise<Array<Order>>{
    return new Repository().getOrders(token, refreshToken);
}