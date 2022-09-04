import React from 'react';
import styles from "./Header.module.css";
import img from './shopping-bag.png';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";

const Header = () =>
{
    const cartCount = useSelector<Store, number>(state => state.cartPage.cartCount);
    return (
    <div className={styles.navBar}>
        <div className='navbar'>
                <div className='col-6'>
                    <ul>
                        <li><a href="#logo">LOGO</a></li>
                        <li><a className={styles.active} href="#men">Men</a></li>
                        <li><a href="#women">Women</a></li>
                        <li><a href="#kids">Kids</a></li>
                        <li><a href="#sale">Sale</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className='col-6 text-end pe-3'>
                    <Link to="/cart" >
                            <img src={img}/>
                            <span className="top-0 start-100 translate-middle badge rounded-pill bg-primary small" style={{fontSize: 9 }}>{cartCount}</span>
                    </Link>
                </div>
        </div>
        <div className={styles.lineDevider}></div>
    </div>);
};

export default Header;