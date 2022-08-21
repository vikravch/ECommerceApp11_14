import Order, {getOrderStr} from "./Order";

export default class Orders{
    orders: Order[];

    constructor(json: any) {
        this.orders = json.orders;
    }
}

const orders = {
    "orders": [
        JSON.parse(getOrderStr),
        JSON.parse(getOrderStr),
        JSON.parse(getOrderStr)
    ]};