export default class User {
    token: string;
    login: string;
    roles: Array<string>;

    constructor(token: string, login: string, roles: Array<string>) {
        this.token = token;
        this.login = login;
        this.roles = roles;
    }
}