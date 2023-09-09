import React from 'react';
import Order from "../../domain/model/Order";
import ProductItem from "../fourthLayer/ProductItem";
import {convertDateToOrderDate} from "../../../../general/common/tools";

interface Props{
    key: number;
    order: Order;
}

const OrdersItem:React.FC<Props> = (props: Props) => {
    let order = props.order;
    let styleStatus = 'statusBlue';
    switch (order.order_status) {
        case 'Done': styleStatus = 'statusGreen'; break;
        case 'Canceled': styleStatus = 'statusRed'; break;
        default: break;
    }

    return (
        <div className={'details mb-3 '}>
            <div className={"row justify-content-between m-0 "}>
                <div className={"col-8 col-sm-9 p-0"}>
                    <div className={"row row-cols-auto"}>
                        <div className={"orderTitle"}>
                        №{order.order_id} – {convertDateToOrderDate(order.created_at)}</div>
                        <div className={`${styleStatus} mb-1 mt-1 m-md-0`}>{order.order_status}</div>
                    </div>
                </div>
                <div className={"col p-0 text-end orderTitle"}>${order.total_price}</div>
            </div>
            <div className={"row m-0"}>
                <div className={"col p-0 gray"}>Delivery: {order.delivery_date}</div>
                <div className={"col p-0 text-end gray"}>Payed by {order.payment_method}</div>
            </div>
            <div className={"br mt-3 mb-1"}/>
            <div className={"row row-cols-2 row-cols-sm-3 m-0"}>{ props.order.order_lines ?
                props.order.order_lines.map((item, index) => {
                    return <ProductItem key={index} product={item}/>
                }) : ''}
            </div>
        </div>
    );
};

export default OrdersItem;