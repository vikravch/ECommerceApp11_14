import React from 'react';
import Order from "../../domain/model/Order";
import ProductItem from "../fourthLayer/ProductItem";

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
        <div className={'details mb-3 '}>
            <div className={"row justify-content-between m-0 "}>
                <div className={"col-8 col-sm-9 p-0"}>
                    <div className={"row row-cols-auto"}>
                        <div className={"orderTitle"}>
                        №{order.orderId} – {getStringDate(order.createdAt)}</div>
                        <div className={`${styleStatus} mb-1 mt-1 m-md-0`}>{order.orderStatus}</div>
                    </div>
                </div>
                <div className={"col p-0 text-end orderTitle"}>${price}</div>
            </div>
            <div className={"row m-0"}>
                <div className={"col p-0 gray"}>Delivery: {getStringDate(order.deliveryDate)}</div>
                <div className={"col p-0 text-end gray"}>Payed by {payment}</div>
            </div>
            <div className={"br mt-3 mb-1"}/>
            <div className={"row row-cols-2 row-cols-sm-3 m-0"}>{ props.order.orderLines ?
                props.order.orderLines.map((item, index) => {
                    return <ProductItem key={index} product={item}/>
                }) : ''}
            </div>
        </div>
    );
};

export default OrdersItem;