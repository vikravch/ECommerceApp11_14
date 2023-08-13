import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp} from "../redux/asyncActions";
import {Store} from "../../../general/redux/storeTypes";
import AuthRepository from "../data/authRepository";

const SignUp:React.FC = () => {
    let [inputType1, setInputType1] = useState('password');
    let [inputType2, setInputType2] = useState('password');
    let [pass, setPass] = useState('');
    let [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const message = useSelector<Store, string>(state => state.loginPage.message);
    const dispatch = useDispatch();

    function changeInputType(str: string): void {
        if(str == 'first'){
            inputType1 == 'password' ? setInputType1('text') : setInputType1('password');
        }else{
            inputType2 == 'password' ? setInputType2('text') : setInputType2('password');
        }
    }

    function formOnSubmit(): void {
        if(pass != confirmPass) {
            alert('Password and repeat password values are not the same.');
        }
        new AuthRepository().signUp(email, pass, dateOfBirth, name, surname)
        //dispatch(signUp(email, pass, dateOfBirth));
    }

    return (
        <div className={'container'}>
            <div className={'breadcrums main'}>Main / <span className={'black'}>Sign up</span></div>
            <div className={'row justify-content-around align-items-center min-height'}>
                <div className={'col-4 mb-5'}>
                    <div className="card">
                        <div className="card-body p-card">
                            <div className={'container mb-3'}>
                                <div className={'row justify-content-between'}>
                                    <div className={'col p-0 card-title h-card'}>Sign Up</div>
                                    <div className={'col-8 p-0 align-self-center gray fw-500 text-end'}>
                                        Already have an account?&nbsp;
                                        <a className={'edit text-decoration-none fw-500'} href={'login'}>Sign In</a></div>
                                </div>
                            </div>
                            <form onSubmit={(e) => {e.preventDefault(); formOnSubmit()}}>
                                <input type="text" className="form-control inputs" placeholder="Name"
                                       pattern={'[A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?'} required
                                       onChange = {(e: FormEvent<HTMLInputElement>) => {setName(e.currentTarget.value)}}/>
                                <input type="text" className="form-control inputs" placeholder="Surname"
                                       pattern={'[A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?'} required
                                       onChange = {(e: FormEvent<HTMLInputElement>) => {setSurname(e.currentTarget.value)}}/>
                                <input type="email" className="form-control inputs" placeholder="Email"
                                       pattern={'.*(\\.\\w{2,})$'} required
                                       onChange = {(e: FormEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}}/>
                                <div className={'position-relative'}>
                                    <input type={inputType1} className="form-control inputs" placeholder="Password"
                                           pattern={"(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}"}
                                           title={'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length more than 8'}
                                           onChange={(e) => setPass(e.target.value)} required/>
                                    <div className={'passwordControl pointer'} onClick={()=>changeInputType('first')}/>
                                </div>
                                <div className={'position-relative'}>
                                    <input type={inputType2} className="form-control inputs" placeholder="Confirm password"
                                           pattern={"(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}"}
                                           title={'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length more than 8'}
                                           onChange={(e)=>setConfirmPass(e.target.value)} required/>
                                    <div className={'passwordControl pointer'} onClick={()=>changeInputType('second')}/>
                                </div>
                                <input type="date" className="form-control inputs" placeholder="dd/mm/yy"
                                       required onChange = {(e: FormEvent<HTMLInputElement>) => {setDateOfBirth(e.currentTarget.value)}}/>
                                <button type={'submit'} className={'btn btn-primary w-100 btnBlue'}>Sign up</button>
                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </form>
                            <p className={'m-0 d-block text-center gray pPrivacy'}>
                                By signing in to your account you agree with our&nbsp;
                                <a href={'/agreement/privacyPolicy'}
                                   className={'fw-500 black text-decoration-none'}>Privacy Policy</a> and&nbsp;
                                <a href={'/agreement/termsOfUse'}
                                   className={'fw-500 black text-decoration-none'}>Terms of Use.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;