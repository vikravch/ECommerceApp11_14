import Cart, {CartData} from "../model/Cart";

export default interface CartPageRepository{
    getCartDetails: (cartId: string)=> Promise<CartData>;
}