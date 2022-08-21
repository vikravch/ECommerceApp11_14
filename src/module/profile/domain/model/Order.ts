import ProductInOrder from "./ProductInOrder";
// Input - response body
export default class Order{
    createdAt: string;
    deliveryDate: string;
    orderId: string;
    orderLines: ProductInOrder[];
    orderStatus: string;
    paymentMethod: string;
    paymentStatus: string;
    totalPrice: string;
    updatedAt: string;

    constructor(json: any) {
        this.createdAt = json.createdAt;
        this.deliveryDate = json.deliveryDate;
        this.orderId = json.orderId;
        this.orderStatus = json.orderStatus;
        this.paymentMethod = json.payment.paymentMethod;
        this.paymentStatus = json.payment.paymentStatus;
        this.totalPrice = json.totalPrice;
        this.updatedAt = json.updatedAt;

        this.orderLines = this.getProducts(json);
    }

    private getProducts(json: any){
        let res = [];
        for(let i=0; i<json.orderLines.length; i++){ // TODO change
            let product = json.orderLines[i];
            res.push(new ProductInOrder(product));
        }
        return res;
    }
}
export const getOrderStr = '{"createdAt": "16592229340002",' +
    '"deliveryDate": "1659234937281",' +
    '"orderId": "12345-001",' + // need number
    '"orderLines": [' +
        '{"color": "Black with print",' +
        '"idProduct": "1234512",' +
        '"product_thumb": "img_1111.jpg",' +
        '"product_title": "Basic T-shirt",' +
        '"quantity": "1",' +
        '"size": "L",' +
        '"sizeUS": "14"},' +
        '{"color": "Purple",' +
        '"idProduct": "1234512",' + // TODO what is with #?
        '"product_thumb": "img_1111.jpg",' +
        '"product_title": "Basic T-shirt",' +
        '"quantity": "1",' +
        '"size": "L",' +
        '"sizeUS": "14"}' + // TODO slash?
    '],' +
    '"orderStatus": "new",' + //accepted/approved/canceled/dispatched/done/returned
    '"payment":{' +
        '"paymentMethod": "visa",' +
        '"paymentStatus": "paid"' + //pending
    '},' +
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}'; // for sorting