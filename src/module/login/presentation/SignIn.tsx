import React, {FormEvent, useState} from 'react';
import './loginStyle.css';
import {signInAction} from "../redux/asyncActions";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {Navigate} from "react-router-dom";
import {routes} from "../../../general/navigation/routes";
import {fillCartOnServer, getCart} from "../../cart/redux/asyncActions";
import User from "../domain/model/typesUserPage";
import CartProduct from "../../cart/domain/model/CartProduct";


// SUPER USER admin@admin.com:admin
const SignIn:React.FC = () => {
    // password from 8 symbols, a-z, A-Z, 0-9, no whitespace
    //TODO bg

    let [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector<Store, string>(state => state.loginPage.message);
    const isLoggedIn = useSelector<Store, boolean>(state => state.loginPage.isLoggedIn);
    const user = useSelector<Store, User>(state => state.loginPage.user);
    const cartItems = useSelector<Store, Array<CartProduct>>(state => state.cartPage.cartItems)

    const dispatch = useDispatch();

    function transformCartItems (cartItems: Array<CartProduct>) {
        return cartItems.map((el) => {
            return {
                product_id: el.product_id,
                size: el.size,
            };
        })
    }

    const fillCartItems = transformCartItems(cartItems)

    function changeInputType(): void {
        inputType == 'password' ? setInputType('text') : setInputType('password');
    }

    const handleSignIn = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signInAction(email, password));
    }

    if (isLoggedIn) {
        if (cartItems.length > 0) {
            dispatch(fillCartOnServer(user.token, user.refreshToken, fillCartItems))
        }
        if (cartItems.length < 1) {
            dispatch(getCart(user.token, user.refreshToken))
        }
        return <Navigate to="/profile"/>;
    }

    return (
        <div className={'container'}>
            <div className={'breadcrums main'}>Main / <span className={'black'}>Sign in</span></div>
            <div className={'row justify-content-around align-items-center min-height'}>
                <div className={'col-md-7 col-lg-5 col-xl-4 mb-5'}>
                    <div className="card mainContainer">
                        <div className="card-body p-card">
                            <div className={'container mb-3'}>
                                <div className={'row justify-content-between'}>
                                    <div className={'col-12 col-sm p-0 card-title h-card'}>Sign In</div>
                                    <div className={'col-12 col-sm-8 p-0 align-self-center gray fw-500 text-end'}>
                                        Don’t have an account?&nbsp;
                                        <a className={'edit text-decoration-none fw-500'} href={'register'}>Sign up</a></div>
                                </div>
                            </div>
                            <form onSubmit={handleSignIn}>
                                <input type="email" className="form-control inputs" placeholder="Email"
                                       pattern={'.*(\\.\\w{2,})$'} required onChange = {(e: FormEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}}/>
                                <div className={'position-relative'}>
                                    <input type={inputType} className="form-control inputs" placeholder="Password"
                                           //pattern={"(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}"}
                                           title={'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length more than 8'}
                                           required onChange = {(e: FormEvent<HTMLInputElement>) => {setPassword(e.currentTarget.value)}}/>
                                    <div className={'passwordControl pointer'} onClick={()=>changeInputType()}/>
                                </div>
                                <button type={'submit'} className={'btn btn-primary w-100 btnBlue'}>Login</button>
                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </form>
                            <a href={`/${routes.recovery}`} className={'edit text-decoration-none fw-500 d-block text-center'}>Lost your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;