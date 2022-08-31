import React, {useEffect} from "react";
import Order, {getOrder1Str} from "../profile/domain/model/Order";

const TestPage: React.FC = () => {
   useEffect(()=>{

       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");

       const raw = JSON.stringify({
           "email": "user1@mail.com",
           "password": "test",
           "dateOfBirth": "2022-08-17"
       });

       const requestOptions: RequestInit = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };

       fetch("https://spring-security-app-ecommerce.herokuapp.com", requestOptions)
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
   },[])

    return <h1>

    </h1>
}

export default TestPage;