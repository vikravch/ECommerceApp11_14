import React from 'react';

const RestorePass:React.FC = () => {
    return (
        <div className={'container'}>
            <div className={'breadcrums main'}>Main / <span className={'black'}>Recovery</span></div>
            <div className={'row justify-content-around align-items-center min-height'}>
                <div className={'col-4 mb-5'}>
                    <div className="card">
                        <div className="card-body p-card">
                            <div className={'container mb-3'}>
                                <div className={'row justify-content-between'}>
                                    <div className={'col p-0 card-title h-card'}>Restore password</div>
                                    <div className={'col-2 p-0 align-self-center gray fw-500 text-end'}>
                                        <a className={'edit text-decoration-none fw-500'} href={'login'}>Sign in</a></div>
                                </div>
                            </div>
                            <form onChange={(e) => {}}>
                                <input type="email" className="form-control inputs" placeholder="Your email"
                                       pattern={'.*(\\.\\w{2,})$'} required/>
                                <button type={'submit'} className={'btn btn-primary w-100 btnBlue m-0'}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestorePass;