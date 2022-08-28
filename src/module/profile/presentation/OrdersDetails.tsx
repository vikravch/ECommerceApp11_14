import React, {useEffect} from 'react';
import getOrdersFake from "../domain/use_cases/getOrdersFake";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Order from "../domain/model/Order";

const OrdersDetails: React.FC = () => {
    const orders = useSelector<Store, Array<Order>>(state => state.ordersDetails.orders);
    const isLoading = useSelector<Store, boolean>(state => state.ordersDetails.isLoading);

    const getOrdersFakeApi = (token: string) => {
        getOrdersFake(token).then((data) => {
            console.log(data);
        })
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        const token = sessionStorage.getItem("token") || '';
        getOrdersFakeApi(token);
    });

    let countKey = 0;

    return (
        orders ? (
        <>
            <div className={"container mb-3"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 fw-500 m-0 p-0"}>Orders</h1>
                    <div className={"col-2 align-self-center p-0"}>
                        <select className="form-select form-select-sm bordRad fw-500">
                            <option defaultValue={"0"}>All</option>
                            <option value="1">Last month</option>
                            <option value="2">Last 6 month</option>
                            <option value="3">Last year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>{
                orders.map(item => {
                    return <div className={'details mb-3'} key={countKey++}>
                        <div className={"row justify-content-between"}>
                            <div className={"col-9"}>
                                <div className={"row row-cols-auto"}>
                                    <div className={"orderTitle"}>№3 – June 02, 2021</div>
                                    <div className={"statusBlue"}>On the way</div>
                                </div>
                            </div>
                            <div className={"col text-end orderTitle"}>150$</div>
                        </div>
                        <div className={"row"}>
                            <div className={"col gray"}>Delivery: June 10, 2021</div>
                            <div className={"col text-end gray"}>Payed by card</div>
                        </div>
                        <div className={"row borderLine mt-3 mb-3"}/>
                        <div className={"row"}>
                            <div className={"col-4 p-0"}>
                                <div className={"row row-cols-auto"}>
                                    <div className={"col ps-3 pe-3"}>
                                        <img src={require("./../../../images/t-shirt-7114.png")} className={"preview"}
                                             alt="product"/>
                                    </div>
                                    <div className={"col p-0"}>
                                        <div className={"gray"}>#7114</div>
                                        <div className={"prodName"}>Basic t-shirt</div>
                                        <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                        <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                        <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-4 p-0"}>
                                <div className={"row row-cols-auto"}>
                                    <div className={"col ps-3 pe-3"}>
                                        <img src={require("./../../../images/t-shirt-7114.png")} className={"preview"}
                                             alt="product"/>
                                    </div>
                                    <div className={"col p-0"}>
                                        <div className={"gray"}>#7114</div>
                                        <div className={"prodName"}>Basic t-shirt</div>
                                        <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                        <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                        <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-4 p-0"}>
                                <div className={"row row-cols-auto"}>
                                    <div className={"col ps-3 pe-3"}>
                                        <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"}
                                             alt="product"/>
                                    </div>
                                    <div className={"col p-0"}>
                                        <div className={"gray"}>#7114</div>
                                        <div className={"prodName"}>Basic t-shirt</div>
                                        <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                        <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                        <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

                <div className={'details mb-3'}>
                    <div className={"row justify-content-between"}>
                        <div className={"col-9"}>
                            <div className={"row row-cols-auto"}>
                                <div className={"orderTitle"}>№2 – April 7, 2021</div>
                                <div className={"statusGreen"}>Done</div>
                            </div>
                        </div>
                        <div className={"col text-end orderTitle"}>150$</div>
                    </div>
                    <div className={"row"}>
                        <div className={"col gray"}>Delivery: June 10, 2021</div>
                        <div className={"col text-end gray"}>Payed by card</div>
                    </div>
                    <div className={"row borderLine mt-3 mb-3"}/>
                    <div className={"row"}>
                        <div className={"col-4 p-0"}>
                            <div className={"row row-cols-auto"}>
                                <div className={"col ps-3 pe-3"}>
                                    <img src={require("./../../../images/t-shirt-7114.png")} className={"preview"}
                                         alt="product"/>
                                </div>
                                <div className={"col p-0"}>
                                    <div className={"gray"}>#7114</div>
                                    <div className={"prodName"}>Basic t-shirt</div>
                                    <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                    <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                    <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-4 p-0"}>
                            <div className={"row row-cols-auto"}>
                                <div className={"col ps-3 pe-3"}>
                                    <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"}
                                         alt="product"/>
                                </div>
                                <div className={"col p-0"}>
                                    <div className={"gray"}>#7114</div>
                                    <div className={"prodName"}>Basic t-shirt</div>
                                    <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                    <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                    <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'details mb-3'}>
                    <div className={"row justify-content-between"}>
                        <div className={"col-9"}>
                            <div className={"row row-cols-auto"}>
                                <div className={"orderTitle"}>№1 – March 26, 2021</div>
                                <div className={"statusRed"}>Canceled</div>
                            </div>
                        </div>
                        <div className={"col text-end orderTitle"}>150$</div>
                    </div>
                    <div className={"row"}>
                        <div className={"col gray"}>Delivery: June 10, 2021</div>
                        <div className={"col text-end gray"}>Payed by card</div>
                    </div>
                    <div className={"row borderLine mt-3 mb-3"}/>
                    <div className={"row"}>
                        <div className={"col-4 p-0"}>
                            <div className={"row row-cols-auto"}>
                                <div className={"col ps-3 pe-3"}>
                                    <img src={require("./../../../images/t-shirt-7142.png")} className={"preview"}
                                         alt="product"/>
                                </div>
                                <div className={"col p-0"}>
                                    <div className={"gray"}>#7114</div>
                                    <div className={"prodName"}>Basic t-shirt</div>
                                    <div className={"gray"}>Color: <span className={"textBlack"}>Purple</span></div>
                                    <div className={"gray"}>Size: <span className={"textBlack"}>L / 14 US</span></div>
                                    <div className={"gray"}>Quantity: <span className={"textBlack"}>1</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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