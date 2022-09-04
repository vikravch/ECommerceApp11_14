import React from 'react';

const OrdersItem = () => {
    return (
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
    );
};

export default OrdersItem;