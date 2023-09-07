export default class User {
    token: string;
    refreshToken: string
    login: string;
    role: string;

    constructor(token: string, refreshToken: string, login: string, role: string) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.login = login;
        this.role = role;
    }
}