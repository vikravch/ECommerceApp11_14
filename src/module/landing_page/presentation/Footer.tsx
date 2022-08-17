import React from 'react';
import style from "../styles/footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.base}>
                <div className={style.logo}>LOGO</div>

                <div className={style.products_text}>Products</div>
                    <div className={style.products_men}>Men</div>
                    <div className={style.products_women}>Women</div>
                    <div className={style.products_kids}>Kids</div>
                    <div className={style.products_sale}>Sale</div>
                    <div className={style.products_collections}>Collections</div>

                <div className={style.get_help}>Get help</div>
                <div className={style.order_status}>Order status</div>
                <div className={style.delovery}>Shipping and delovery</div>
                <div className={style.returns}>Returns</div>
                <div className={style.payment_options}>Payment options</div>

                <div className={style.legals}>Legals</div>
                <div className={style.terms}>Terms of services</div>
                <div className={style.privacy_policy}>Privacy policy</div>

                <div className={style.contact}>Contact</div>
                <div className={style.email}>Email</div>
                <div className={style.gmail}>eccommerce@gmail.com</div>
                <div className={style.frame2}>
                    <div className={style.phone}>Phone</div>
                    <div className={style.phone_number}>972 756 555-0123</div>
                </div>
                <div className={style.frame4}>
                    <div className={style.address}>Address</div>
                    <div className={style.address_city}>2464 Royal Ln. Mesa, New Jersey 45463</div>
                </div>

                </div>
                <div className={style.divider}></div>
                <h6 className={style.telRan}>TelRan &copy; 2022</h6>
                <div className={style.facebook}>

                    <div className={style.facebook_path}>
                        <div className={style.base_icon}>
                            <img className={style.facebook_icon}/>
                        </div>
                    </div>
                </div>
            <div className={style.inst}>
                    <div className={style.base_icon}>
                        <img className={style.inst_icon}/>
                    </div>
            </div>

            <div className={style.twitter}>
                <div className={style.base_icon}>
                        <img className={style.twitter_icon}/>
                </div>
            </div>



            </div>

    )
};

export default Footer;