import React from "react";
import Order, {getOrder1Str} from "../profile/domain/model/Order";

import { createServer, Factory, Model } from "miragejs"

export function MockServer({enironment = 'development'}){

    return createServer(
        {routes: () => {

            }}
    )
}

let server = createServer({
});
//server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

const TestPage: React.FC = () => {

    const obj = JSON.parse(getOrder1Str) as Order;

    return <h1>
        {obj.orderLines[0].color}
    </h1>
}

export default TestPage;