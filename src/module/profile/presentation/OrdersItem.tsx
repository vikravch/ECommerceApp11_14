import React from 'react';
import Order from "../domain/model/Order";
import ProductItem from "./ProductItem";

interface Props{
    key: number;
    order: Order;
}

const OrdersItem:React.FC<Props> = (props: Props) => {
    function getStringDate(data: string): string{
        let date = new Date(Number(data));
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
        return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    let order = props.order;
    let styleStatus = 'statusBlue';
    switch (order.orderStatus) {
        case 'Done': styleStatus = 'statusGreen'; break;
        case 'Canceled': styleStatus = 'statusRed'; break;
        default: break;
    }
    let payment = order.paymentMethod == 'paypal' ? 'PayPal' : 'card';
    let price = Number(order.totalPrice).toFixed(2);

    return (
        <div className={'details mb-3'}>
            <div className={"row justify-content-between"}>
                <div className={"col-9"}>
                    <div className={"row row-cols-auto"}>
                        <div className={"orderTitle"}>
                        №{order.orderId} – {getStringDate(order.createdAt)}</div>
                        <div className={styleStatus}>{order.orderStatus}</div>
                    </div>
                </div>
                <div className={"col text-end orderTitle"}>${price}</div>
            </div>
            <div className={"row"}>
                <div className={"col gray"}>Delivery: {getStringDate(order.deliveryDate)}</div>
                <div className={"col text-end gray"}>Payed by {payment}</div>
            </div>
            <div className={"row borderLine mt-3 mb-1"}/>
            <div className={"row"}>{ props.order.orderLines ?
                props.order.orderLines.map(item => {
                    return <ProductItem key={Number(item.idProduct)} product={item}/>
                }) : ''}
            </div>
        </div>
    );
};

export default OrdersItem;