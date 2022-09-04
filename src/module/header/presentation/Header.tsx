import React from 'react';
import styles from "./Header.module.css";
import imgProfile from "./imgProfile.png";


const Header = () =>
{
    let profileBtn = sessionStorage.getItem("token") ? "/profile" : "/login";

    return ( <div className={styles.navBar}>
        <ul>
            <li><a href="/landing">LOGO</a></li>
            <li><a className={styles.active} href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#kids">Kids</a></li>
            <li><a href="#sale">Sale</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className={"position-absolute end-0"}><a href={profileBtn}>
                <img src={imgProfile} className={"imgProfile ps-2 pe-2"} alt={"profile"}/></a></li>
        </ul>
        <div className={styles.lineDevider}/>
    </div>);
};

export default Header;