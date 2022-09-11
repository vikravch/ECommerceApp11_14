import React from 'react';
import style from "../styles/subscribtion.module.css"
import email from "../images/sumbol/email.png";

const Subscribtion = () => {
    return (
        <div className={style.subscribtion}>
            <div className={style.base_color}>
                <div className={style.textSub}>
                    <div className={style.newsletter}>Newsletter</div>
                    <div className={style.subscribeText}>Subscribe and get
                        info about new releases first</div>
                    <form className={style.form}>
                        <div className={style.input}>
                            <label className={style.text_input}>
                                <div className={style.icon_email}>
                                    <div className={style.text_enter}>
                                        <input type={"image"} src={email} className={style.icon_email_vector}/>
                                        <div className={style.enter}>Enter you email</div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className={style.button}>
                            <div className={style.text_button}>
                                <div className={style.text_button_sub}>Subscribe</div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className={style.base_img}></div>
        </div>
    );
};

export default Subscribtion;