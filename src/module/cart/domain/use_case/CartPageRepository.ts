import Cart from "../model/Cart";

export default interface CartPageRepository{
    getCartDetails: (cartId: string)=> Promise<Cart>;
}