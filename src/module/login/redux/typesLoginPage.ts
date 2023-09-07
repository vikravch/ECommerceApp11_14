import User from "../domain/model/typesUserPage";

export interface LoginPageStore {
    isLoggedIn: boolean,
    user: User,
    message: string
}