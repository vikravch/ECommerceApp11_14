import {CartData} from "../model/Cart";

export default interface CartPageRepository{
    getCartDetails: (token: string, refreshToken: string)=> Promise<CartData>;
}