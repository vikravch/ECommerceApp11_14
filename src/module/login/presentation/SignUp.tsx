import React, {useState} from 'react';

const SignUp:React.FC = () => {
    //TODO Privacy Policy and Terms of Use

    let [inputType1, setInputType1] = useState('password');
    let [inputType2, setInputType2] = useState('password');
    let [pass, setPass] = useState('');
    let [confirmPass, setConfirmPass] = useState('');

    function changeInputType(str: string): void {
        if(str == 'first'){
            inputType1 == 'password' ? setInputType1('text') : setInputType1('password');
        }else{
            inputType2 == 'password' ? setInputType2('text') : setInputType2('password');
        }
    }

    function formOnSubmit(): void {
        console.log(pass);
        console.log(confirmPass);
        if(pass != confirmPass) {
            alert('Password and repeat password values is not the same.');
        }
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
                                       pattern={'[A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?'} required/>
                                <input type="text" className="form-control inputs" placeholder="Surname"
                                       pattern={'[A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?'} required/>
                                <input type="email" className="form-control inputs" placeholder="Email"
                                       pattern={'.*(\\.\\w{2,})$'} required/>
                                <div className={'position-relative'}>
                                    <input type={inputType1} className="form-control inputs" placeholder="Password"
                                           pattern={"(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"}
                                           title={'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length more than 8'}
                                           onChange={(e) => setPass(e.target.value)} required/>
                                    <div className={'passwordControl pointer'} onClick={()=>changeInputType('first')}/>
                                </div>
                                <div className={'position-relative'}>
                                    <input type={inputType2} className="form-control inputs" placeholder="Confirm password"
                                           pattern={"(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"}
                                           title={'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length more than 8'}
                                           onChange={(e)=>setConfirmPass(e.target.value)} required/>
                                    <div className={'passwordControl pointer'} onClick={()=>changeInputType('second')}/>
                                </div>
                                <button type={'submit'} className={'btn btn-primary w-100 btnBlue'}>Sign up</button>
                            </form>
                            <p className={'m-0 d-block text-center gray pPrivacy'}>
                                By signing in to your account you agree with our&nbsp;
                                <a href={'https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=IL&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'}
                                   className={'fw-500 black text-decoration-none'}>Privacy Policy</a> and&nbsp;
                                <a href={'https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=IL&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'}
                                   className={'fw-500 black text-decoration-none'}>Terms of Use.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;