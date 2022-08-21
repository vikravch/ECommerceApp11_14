import React from "react";
import Order, {getOrderStr} from "../profile/domain/model/Order";

const TestPage: React.FC = () => {

    const obj = JSON.parse(getOrderStr) as Order;

    return <h1>
        {obj.orderLines[0].color}
    </h1>
}

export default TestPage;