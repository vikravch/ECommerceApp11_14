class OrderProduct {
    constructor(prodId: number, color: string, size: string, number: number) {
        this.prodId = prodId;
        this.color = color;
        this.size = size;
        this.number = number;
    }
    prodId: number;
    color: string;
    size: string;
    number: number;
}

export class Addr {
    constructor(country: string, zip: number, addr: string) {
        this.country = country;
        this.zip = zip;
        this.addr = addr;
    }

    country: string;
    zip: number;
    addr: string;
}

export default class Order {
    constructor(orderId: number, customerId: number, cartItems: Array<OrderProduct>, timestampOrderDate: number, deliveryAddr: Addr, deliveryCost: number) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.cartItems = cartItems;
        this.timestampOrderDate = timestampOrderDate;
        this.deliveryAddr = deliveryAddr;
        this.deliveryCost = deliveryCost;
    }
    orderId : number;
    customerId: number;
    cartItems: Array<OrderProduct>;
    timestampOrderDate: number;
    deliveryAddr: Addr;
    deliveryCost: number;
}