import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Order from "../domain/model/Order";
import {getOrdersDetailsAction} from "../redux/asyncActions";
import OrdersItem from "./OrdersItem";

const OrdersDetails: React.FC = () => {
    const orders = useSelector<Store, Array<Order>>(state => state.ordersDetails.orders);
    const isLoading = useSelector<Store, boolean>(state => state.ordersDetails.isLoading);
    let ordersNewDirection = new Array<Order>(orders.length);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOrdersDetailsAction(sessionStorage.getItem("token") || ''));
    }, []);

    if(orders.length !== 0){
        for(let i = 0, j = orders.length-1; i < orders.length; i++, j--){
            ordersNewDirection[j] = orders[i];
        }
    }

    function sortOrders(option: string):any{
        switch (option){
            case '1': {
                if(orders.length !== 0){
                    for(let i = 0; i < orders.length; i++){
                        ordersNewDirection[i] = orders[i];
                    }
                } break;
            }
            case '2': console.log("2"); break;
            case '3': console.log("3"); break;
            default: {
              orders.shift();
            }
        }
    }

    useEffect(()=>{
        console.log("helllo its me")
    }, [ordersNewDirection]);

    // TODO first render is [[..., ...]]
    return (
        orders.length !== 0 ? (
        <>
            <div className={"container mb-3"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 fw-500 m-0 p-0"}>Orders</h1>
                    <div className={"col-2 align-self-center p-0"}>
                        <select className="form-select form-select-sm bordRad fw-500"
                                onChange={(e)=>sortOrders(e.target.value)}>
                            <option value="0">All</option>
                            <option value="1">Last month</option>
                            <option value="2">Last 6 month</option>
                            <option value="3">Last year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>{
                ordersNewDirection.map(item => {
                    return <OrdersItem key={Number(item.createdAt)} order={item}/>
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

// <div className={'details mb-3'}>
//     <div className={"row justify-content-between"}>
//         <div className={"col-9"}>
//             <div className={"row row-cols-auto"}>
//                 <div className={"orderTitle"}>№2 – April 7, 2021</div>
//                 <div className={"statusGreen"}>Done</div>
//             </div>
//         </div>
//         <div className={"col text-end orderTitle"}>150$</div>
//     </div>
//     <div className={"row"}>
//         <div className={"col gray"}>Delivery: June 10, 2021</div>
//         <div className={"col text-end gray"}>Payed by card</div>
//     </div>
//     <div className={"row borderLine mt-3 mb-3"}/>
//     <div className={"row"}>
//         <div className={"col-4 p-0"}>
//             <div className={"row row-cols-auto"}>
//                 <div className={"col ps-3 pe-3"}>
//                     <img src={require("./../../../images/t-shirt-7114.png")} className={"preview"}
//                          alt="product"/>
//                 </div>
//                 <div className={"col p-0"}>
//                     <div className={"gray"}>#7114</div>
//                     <div className={"prodName"}>Basic t-shirt</div>
//                     <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
//                     <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
//                     <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
//                 </div>
//             </div>
//         </div>
//         <div className={"col-4 p-0"}>
//             <div className={"row row-cols-auto"}>
//                 <div className={"col ps-3 pe-3"}>
//                     <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"}
//                          alt="product"/>
//                 </div>
//                 <div className={"col p-0"}>
//                     <div className={"gray"}>#7114</div>
//                     <div className={"prodName"}>Basic t-shirt</div>
//                     <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
//                     <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
//                     <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className={'details mb-3'}>
//     <div className={"row justify-content-between"}>
//         <div className={"col-9"}>
//             <div className={"row row-cols-auto"}>
//                 <div className={"orderTitle"}>№1 – March 26, 2021</div>
//                 <div className={"statusRed"}>Canceled</div>
//             </div>
//         </div>
//         <div className={"col text-end orderTitle"}>150$</div>
//     </div>
//     <div className={"row"}>
//         <div className={"col gray"}>Delivery: June 10, 2021</div>
//         <div className={"col text-end gray"}>Payed by card</div>
//     </div>
//     <div className={"row borderLine mt-3 mb-3"}/>
//     <div className={"row"}>
//         <div className={"col-4 p-0"}>
//             <div className={"row row-cols-auto"}>
//                 <div className={"col ps-3 pe-3"}>
//                     <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"}
//                          alt="product"/>
//                 </div>
//                 <div className={"col p-0"}>
//                     <div className={"gray"}>#7114</div>
//                     <div className={"prodName"}>Basic t-shirt</div>
//                     <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
//                     <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
//                     <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>