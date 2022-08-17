export default class Order {
    idOrder : string;
    customerId: string;
    cartItems: string;
    orderDate: string;
    deliveryAddr: string;


    constructor(idOrder:string, customerId: string, cartItems:string, orderDate: string, deliveryAddr:string) {
        this.idOrder = idOrder
        this.customerId = customerId
        this.cartItems = cartItems
        this.orderDate = orderDate
        this.deliveryAddr = deliveryAddr
    }
}

// int orderId;
// private long customerId;
// private Map<String, Float> cartItems;
// private LocalDate orderDate;
// private Address deliveryAddr;