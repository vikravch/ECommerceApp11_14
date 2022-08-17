import React from 'react';
import styles from "./Header.module.css";

const Header = () =>
{
    return ( <div className={styles.navBar}>
        <ul>
            <li><a href="#logo">LOGO</a></li>
            <li><a className={styles.active} href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#kids">Kids</a></li>
            <li><a href="#sale">Sale</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#blog">Blog</a></li>
        </ul></div>);
};

export default Header;