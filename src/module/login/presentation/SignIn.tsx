import React, {FormEvent, useState} from 'react';
import './loginStyle.css';
import {signIn} from "../redux/asyncActions";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {Navigate} from "react-router-dom";
import AuthRepository from "../data/authRepository";


// SUPER USER admin@admin.com:admin
const SignIn:React.FC = () => {
    // password from 8 symbols, a-z, A-Z, 0-9, no whitespace
    //TODO bg

    let [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector<Store, string>(state => state.loginPage.message);
    const isLoggedIn = useSelector<Store, boolean>(state => state.loginPage.isLoggedIn);
    const dispatch = useDispatch();

    function changeInputType(): void {
        inputType == 'password' ? setInputType('text') : setInputType('password');
    }

    const handleSignIn = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //dispatch(signIn(email, password));
        new AuthRepository().signIn(email, password)
    }

    if (isLoggedIn) {
        return <Navigate to="/profile"/>;
    }

    return (
        <div className={'container'}>
            <div className={'breadcrums main'}>Main / <span className={'black'}>Sign in</span></div>
            <div className={'row justify-content-around align-items-center min-height'}>
                <div className={'col-4 mb-5'}>
                    <div className="card">
                        <div className="card-body p-card">
                            <div className={'container mb-3'}>
                                <div className={'row justify-content-between'}>
                                    <div className={'col p-0 card-title h-card'}>Sign In</div>
                                    <div className={'col-8 p-0 align-self-center gray fw-500 text-end'}>
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
                            <a href="recovery" className={'edit text-decoration-none fw-500 d-block text-center'}>Lost your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;