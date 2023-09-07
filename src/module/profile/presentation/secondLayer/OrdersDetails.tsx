import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Order from "../../domain/model/Order";
import OrdersItem from "../thirdLayer/OrdersItem";
import {sortOrdersAction} from "../../redux/asyncActions";

const OrdersDetails: React.FC = () => {
    const orders = useSelector<Store, Array<Order>>(state => state.profilePage.orders);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const dispatch = useDispatch();

    function filterOrders(option: string):any{
        console.log(option)
        setFilteredOrders([]); //!
        dispatch(sortOrdersAction(option));
    }

    let dateNow = new Date();
    let dateLastMonth = new Date();
    dateLastMonth.setDate(dateNow.getDate() - 30);
    let dateLast6Month = new Date();
    dateLast6Month.setMonth(dateNow.getMonth() - 6);
    let dateLastYear = new Date();
    dateLastYear.setMonth(dateNow.getMonth() - 12);

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
                            <option value={Number(dateLastMonth).toString()}>Last month</option>
                            <option value={Number(dateLast6Month).toString()}>Last 6 month</option>
                            <option value={Number(dateLastYear).toString()}>Last year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>{(filteredOrders.length > 0 ? filteredOrders :
                orders).map((item, index) => {
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