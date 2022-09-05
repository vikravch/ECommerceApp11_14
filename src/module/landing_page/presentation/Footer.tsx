import React from 'react';
import facebook from "../images/footer/Path.png"
import instagram from "../images/footer/Combined Shape.png"
import twitter from "../images/footer/Twit.png"
import imgBag from "../images/sumbol/bag.png";
import style from "../styles/navigation_menu.module.css";

const Footer = () => {
    return (<footer className="ry-5 bg-dark">
            <div className='container text-md-start p-5'>
                             <div className='row'>
                                 <div className='col '>
                                     <h5 className='text-uppercase fw-bold mb-4 text-light'>LOGO</h5>
                                 </div>

                                 <div  className='mx-auto  col '>
                                     <h5 className=' fw-bold mb-4 text-light'>Products</h5>
                                     <p><a href='/product/men' className='text-secondary'>Men</a></p>
                                     <p><a href='/product/women' className='text-secondary'>Women</a></p>
                                     <p><a href='/product/kids' className='text-secondary'>Kids</a></p>
                                     <p><a href='/product/sale' className='text-secondary'>Sale</a></p>
                                     <p><a href='/product/collection' className='text-secondary'>Collection </a></p>
                                 </div>

                                 <div className='mx-auto col '>
                                     <h5 className='fw-bold mb-4 text-light'>Get help</h5>
                                     <p><a href='#!' className='text-secondary'>Order status</a></p>
                                     <p><a href='#!' className='text-secondary'>Shipping and delovery</a></p>
                                     <p><a href='#!' className='text-secondary'>Returns</a></p>
                                     <p><a href='#!' className='text-secondary'>Payment options</a></p>
                                 </div>

                                 <div  className='mx-auto mb-md-0 col'>
                                     <h5 className='fw-bold mb-4 text-light'>Legals</h5>
                                     <p className='text-secondary'>Terms of services</p>
                                     <p className='text-secondary'>Privacy policy</p>
                                 </div >

                                 <div  className='mx-auto mb-md-0 col-3 '>
                                     <h5 className='fw-bold mb-4 text-light'>Contact</h5>
                                     <p className='text-secondary'>Email</p>
                                     <p className="text-light">ecommerce@gmail.com</p>
                                     <p className='text-secondary'>Phone</p>
                                     <p className="text-primary">972 756 555-0123</p>
                                     <p className='text-secondary'>Address</p>
                                     <p className="text-light">2464 Royal Ln. Mesa, New Jersey 45463</p>
                                 </div>
                             </div>
                         </div>
            <div className="container border-bottom"></div>
            <div className='container text-md-start mt-5'>
                             <div className='row'>
                                 <div className='col '>
                                    <h5 className='fw-bold mb-4 text-secondary'>Tel Ran © 2022</h5>
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