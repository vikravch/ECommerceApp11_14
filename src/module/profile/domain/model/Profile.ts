export default class Profile{
    address: string;
    country: string;
    email: string;
    name: string;
    phone: string;
    surname: string;
    zipCode: string;

    constructor(json: any) {
        this.address = json.address;
        this.country = json.country;
        this.email = json.email;
        this.name = json.name;
        this.phone = json.phone;
        this.surname = json.surname;
        this.zipCode = json.zipCode;
    }
}

// export const getProfilePreviewStr = '{' +
//     '"address": "2464 Royal Ln. Mesa, New Jersey",' +
//     '"country": "US",' +
//     '"email": "debbie.baker@gmail.com",' +
//     '"name": "Debbie",' +
//     '"phone": "6035550123",' +
//     '"surname": "Baker",' +
//     '"zipCode": "45463"' +
//     '}';

// export const getProfilePreviewStr = '{' +
//     '"address": "Thornridge Cir. Syracuse, Connecticut, 21",' +
//     '"country": "England",' +
//     '"email": "bill.sanders@gmail.com",' +
//     '"name": "Bill",' +
//     '"phone": "2395550108",' +
//     '"surname": "Sanders",' +
//     '"zipCode": "123456"' +
//     '}';

export const getProfilePreviewStr = '{' +
    '"address": "",' +
    '"country": "",' +
    '"email": "dwight.schrute@gmail.com",' +
    '"name": "Dwight",' +
    '"phone": "",' +
    '"surname": "Schrute",' +
    '"zipCode": ""' +
    '}';

const profileDataOnServer = {
    "address": "2464 Royal Ln. Mesa, New Jersey",
    "country": "US",
    "email": "debbie.baker@gmail.com",
    "name": "Debbie",
    "phone": "6035550123",
    "surname": "Baker",
    "uid": "1234512",
    "zipCode": "45463"
};