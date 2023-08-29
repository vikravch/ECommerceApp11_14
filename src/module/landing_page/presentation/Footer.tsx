import React from 'react';
import facebook from "../images/footer/Path.png"
import instagram from "../images/footer/Combined Shape.png"
import twitter from "../images/footer/Twit.png"
import {Link} from "react-router-dom";
import styles from "../../header/presentation/Header.module.css";
import {routes} from "../../../general/navigation/routes";

const Footer = () => {
    return (
        <footer className={`y-5 bg-dark + ${styles.footer}`}>
            <div className='container text-md-start p-5'>
                     <div className='row row-cols-1 row-cols-sm-2 row-cols-md-6 row-cols-lg-6 row-cols-xl-6 text-center text-sm-start'>
                         <div className='col d-sm-none d-md-none d-lg-block'>
                             <h5><Link className='text-uppercase fw-bold mb-4 text-light text-decoration-none' to={'/'}>LOGO</Link></h5>
                         </div>

                         <div  className='mx-auto col col-sm-6 col-md-6 col-lg'>
                             <h5 className=' fw-bold mb-4 text-light'>Products</h5>
                             <p><Link className='text-secondary text-decoration-none' to={'/catalog/men'}>Men</Link></p>
                             <p><Link className='text-secondary text-decoration-none' to={'/catalog/women'}>Women</Link></p>
                             <p><Link className='text-secondary text-decoration-none' to={'/catalog/kids'}>Kids</Link></p>
                             <p><Link className='text-secondary text-decoration-none' to={'/catalog/sale'}>Sale</Link></p>
                             <p><Link className='text-secondary text-decoration-none' to={'/catalog/collection'}>Collection</Link></p>
                         </div>

                         <div className='mx-auto col col-sm-6 col-md-6 col-lg'>
                             <h5 className='fw-bold mb-4 text-light'>Get help</h5>
                             <p><a href='#' className='text-secondary text-decoration-none'>Order status</a></p>
                             <p><a href='#' className='text-secondary text-decoration-none'>Shipping and delovery</a></p>
                             <p><a href='#' className='text-secondary text-decoration-none'>Returns</a></p>
                             <p><a href='#' className='text-secondary text-decoration-none'>Payment options</a></p>
                         </div>

                         <div className='mx-auto mb-md-0 col col-sm-6 col-md-6 col-lg'>
                             <h5 className='fw-bold mb-4 text-light'>Legals</h5>
                             <p className='text-secondary'>
                                 <a href={`/${routes.termsOfUse}/`} className='text-secondary text-decoration-none'>Terms of services</a></p>
                             <p className='text-secondary'>
                                 <a href={`/${routes.privacyPolicy}/`} className='text-secondary text-decoration-none'>Privacy policy</a></p>
                         </div>

                         <div  className='mx-auto mb-md-0 col col-sm-6 col-md-6 col-lg'>
                             <h5 className='fw-bold mb-4 text-light'>Contact</h5>
                             <p className='text-secondary'>Email</p>
                             <p className='text-light text-decoration-none'>ecommerce@gmail.com</p>
                             <p className='text-secondary'>Phone</p>
                             <p className="text-primary">972 756 555-0123</p>
                             <p className='text-secondary'>Address</p>
                             <p className="text-light">2464 Royal Ln. Mesa, New Jersey 45463</p>
                         </div>
                     </div>
                 </div>
            <div className='container border-top text-md-start pt-5'>
                 <div className='row'>
                     <div className='col'>
                         <p className='text-secondary'>Tel Ran © 2022</p>
                    </div>

                     <div className='col-auto '>
                         <a href="https://ru-ru.facebook.com/" className="nav-item nav-link">
                             <img src={facebook} alt="facebook"/>
                         </a>

                     </div>
                     <div className='col-auto '>
                         <a href="https://www.instagram.com/" className="nav-item nav-link">
                             <img src={instagram} alt="instagram"/>
                         </a>
                     </div>
                     <div className='col-auto '>
                         <a href="https://twitter.com/?lang=ru" className="nav-item nav-link">
                             <img src={twitter} alt="twitter"/>
                         </a>
                     </div>
                 </div>
            </div>
        </footer>
)
};

export default Footer;