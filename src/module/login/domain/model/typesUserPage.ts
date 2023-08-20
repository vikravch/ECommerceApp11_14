export default class User {
    token: string;
    refreshToken: string
    login: string;
    roles: Array<string>;

    constructor(token: string, refreshToken: string, login: string, roles: Array<string>) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.login = login;
        this.roles = roles;
    }
}