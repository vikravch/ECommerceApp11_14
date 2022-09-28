import React from 'react';
import styles from "./Header.module.css";
import img from './shopping-bag.png';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import imgProfile from "./imgProfile.png";
import {routes} from "../../../general/navigation/routes";

interface Props {
    isDark: boolean
}

const Header = (props: Props) => {

    const cartCount = useSelector<Store, number>(state => state.cartPage.cartCount);
    let profileBtn = sessionStorage.getItem("token") ? "/profile" : "/login";

    return (
        <div className={(props.isDark) ? styles.dark : styles.white}>
            <div className={styles.navBar}>
                <ul>
                    <li><a href="/">LOGO</a></li>
                    <li><a className={styles.active} href="/catalog/men">Men</a></li>
                    <li><a href="/catalog/women">Women</a></li>
                    <li><a href="/catalog/kids">Kids</a></li>
                    <li><a href="/catalog/sale">Sale</a></li>
                    <li><a href="/catalog/collection">Collections</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li>
                        <Link to="/cart">
                            <img src={img}/>
                            <span className="top-0 start-100 translate-middle badge rounded-pill bg-primary small"
                                  style={{fontSize: 9}}>{cartCount}</span>
                        </Link>
                    </li>
                    <li className={"position-absolute end-0"}><a href={profileBtn}>
                        <img src={imgProfile} className={"imgProfile ps-2 pe-2"} alt={"profile"}/></a></li>
                </ul>
                <div className={styles.lineDevider}/>
            </div>
        </div>);
};

export default Header;