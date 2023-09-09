import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Order from "../../domain/model/Order";
import OrdersItem from "../thirdLayer/OrdersItem";

const OrdersDetails: React.FC = () => {
    const orders = useSelector<Store, Array<Order>>(state => state.profilePage.orders);
    const [filteredOrders, setFilteredOrders] = useState<Array<Order>>([]);

    const dateNow = new Date();
    const dateLastMonth = new Date(dateNow.getTime() - 30 * 24 * 60 * 60 * 1000); // dateLastMonth
    const dateLast6Month = new Date(dateNow.getTime() - 6 * 30 * 24 * 60 * 60 * 1000); // dateLast6Month
    const dateLastYear = new Date(dateNow.getTime() - 12 * 30 * 24 * 60 * 60 * 1000); // dateLastYear
    const filterDates = [new Date("2020-01-01").toUTCString(), dateLastMonth, dateLast6Month, dateLastYear];

    function filterOrders(option: string): void {
        setFilteredOrders(option === "0" ? orders :
            orders.filter(o => new Date(o.created_at) > filterDates[+option]));
    }

    return (
        orders.length !== 0 ? (
        <>
            <div className={"container mt-5 mt-xl-0 mb-3"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 fw-500 m-0 p-0"}>Orders</h1>
                    <div className={"col-4 col-md-2 align-self-center p-0"}>
                        <select className="form-select form-select-sm bordRad fw-500"
                                onChange={(e)=>filterOrders(e.target.value)}>
                            <option value="0">All</option>
                            <option value="1">Last month</option>
                            <option value="2">Last 6 month</option>
                            <option value="3">Last year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>{(filteredOrders.length === 0 ? orders : filteredOrders).map((item, index) => {
                    return <OrdersItem key={index} order={item}/>
                })}
            </div>
        </>
        ) : (
        <>
            <div className={"container mb-3"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 fw-500 m-0 p-0"}>Orders</h1>
                </div>
            </div>
            <h3 className={'gray noOrder'}>Here will be your orders</h3>
        </>)
    );
};

export default OrdersDetails;