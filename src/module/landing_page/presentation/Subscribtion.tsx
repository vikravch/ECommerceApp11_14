import React, {useState} from 'react';
import style from "../styles/subscribtion.module.css"
import email from "../images/sumbol/email.png";

const Subscribtion = () => {
    let [subscribeEmail, setSubscribeEmail] = useState('');
    // const dispatch = useDispatch()
    // useEffect(() => {
    // });

    function handleSubmit(event: any): void {
        event.preventDefault();
        console.log('subscribe email: ' + subscribeEmail);
        //dispatch()
        setSubscribeEmail('');
    }

    return (
        <div className={style.subscribtion + ' container-fluid'}>
            <div className={'row h-100'}>
                <div className={'col-xl col-lg-12 d-flex align-items-center justify-content-center h-100'}>
                    <div className={'box w-75 ' + style.box}>
                        <div>
                            <div className={style.newsletter}>Newsletter</div>
                            <div className={style.subscribeText}>Subscribe and get info about new releases first</div>
                        </div>

                        <form className={'w-75 container row m-0 p-0 justify-content-evenly'}
                            onSubmit={(e) => handleSubmit(e)}>
                            <div className={'col position-relative m-0 p-0 pb-4 pe-4 '}>
                                <div className={'d-flex'}>
                                    <img src={email} alt={'email'} className={style.emailIcon}/>
                                    <input type='text' placeholder={'Enter your email'} className={style.input}
                                    value={subscribeEmail} onChange={e => setSubscribeEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className={'col m-0 p-0'}>
                                <button type={'submit'} className={style.subscribeBtn}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={style.base_img + ' col-xl col-lg-12'}/>
            </div>
        </div>
    );
};

export default Subscribtion;