export default class Profile{
    address: string;
    email: string;
    name: string;
    numberForView: string;
    phone: string;
    surname: string;
    uid: string;
    zipCode: string;

    constructor(json: any) {
        this.address = json.address;
        this.email = json.string;
        this.name = json.string;
        this.numberForView = json.numberForView;
        this.phone = json.string;
        this.surname = json.string;
        this.uid = json.uid;
        this.zipCode = json.zipCode;
    }
}

export const getProfilePreviewStr = '{' +
    '"address": "2464 Royal Ln. Mesa, New Jersey",' +
    '"email": "debbie.baker@gmail.com",' +
    '"name": "Debbie",' +
    '"numberForView": "2154",' +
    '"phone": "6035550123",' +
    '"surname": "Baker",' +
    '"uid": "12345",' +
    '"zipCode": "45463"' +
    '}';

//TODO need "id": "12345", or will use just token ?

const profileDataOnServer = {
    "address": "2464 Royal Ln. Mesa, New Jersey",
    "country": "US",
    "email": "debbie.baker@gmail.com",
    "name": "Debbie",
    "payment": {
        "cvv": "123",
        "expirationDate": "0427",
        "id": "1234123412342154",
        "numberForView": "2154",
        "type": "masterCard"
    },
    "phone": "6035550123",
    "subscribe": "true", // TODO if == true, don't need to ask subscribe on main
    "surname": "Baker",
    "uid": "12345",
    "zipCode": "45463"
};