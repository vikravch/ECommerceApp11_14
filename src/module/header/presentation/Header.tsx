import React, {useCallback, useEffect, useState} from 'react';
import styles from "./Header.module.css";
import img from '../icons/shopping-bag.png';
import imgEmpty from '../icons/shoppingBagEmpty.png';
import search from '../icons/search.png';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import imgProfile from "../icons/imgProfile.png";

interface Props {
    isDark: boolean
}

const Header = (props: Props) => {

    const cartCount = useSelector<Store, number>(state => state.cartPage.cartCount);
    let [cartImg, setCartImg] = useState({img: imgEmpty, spanCountStyle: 'd-none'});
    let [searchVal, setSearchVal] = useState('');

    //link to profile or login
    let profileBtn = sessionStorage.getItem("user") ? "/profile" : "/login";
    const navigate = useNavigate();
    // const handleOnClick = useCallback(() => navigate('/catalog/search'), [navigate]);
    let [startSearch, setStartSearch] = useState(false);

    useEffect(() => {
        if (cartCount === 0) {
            setCartImg({img: imgEmpty, spanCountStyle: 'd-none'});
        } else {
            setCartImg({img: img, spanCountStyle: ''});
        }
    }, [cartCount]);

    useEffect(() => {
        if (startSearch) {
            navigate("/catalog/search");
        }
        setStartSearch(false);
    }, [startSearch]);

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            console.log(searchVal);
            setStartSearch(true);
        }
    }

    return (
        <div>
            <div className={styles.navBar + ' navbar-expand-lg'}>

                <div className={(props.isDark) ? `${styles.navBarDark}` : `${styles.navBarLight}`}>

                    <button className={styles.humburger + ' navbar-toggler'} type="button" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon">---</span>
                        <div className={styles.mobileNav}>
                            <div className={styles.mobNavItem}>
                                <span style={{ fontWeight: 'bold' }} onClick={() => window.location.href = '/'}>LOGO</span>
                            </div>
                            <div className={`${styles.mobNavItem} ${styles.active}`}>
                                <span onClick={() => window.location.href = '/catalog/men' } >Men</span>
                            </div>
                            <div className={styles.mobNavItem}>
                                <span onClick={() => window.location.href = '/catalog/women'}>Woman</span>
                            </div>
                            <div className={styles.mobNavItem}>
                                <span onClick={() => window.location.href = '/catalog/kids'}>Kids</span>
                            </div>
                            <div className={styles.mobNavItem}>
                                <span onClick={() => window.location.href = '/catalog/sale'}>Sale</span>
                            </div>
                            <div className={styles.mobNavItem}>
                                <span onClick={() => window.location.href = '/catalog/collection'}>Collections</span>
                            </div>
                            <div className={styles.mobNavItem}>
                                <span onClick={() => window.location.href = '/blog'}>Blog</span>
                            </div>
                        </div>
                    </button>

                    <div className={styles.leftNav + ' collapse navbar-collapse'}>
                        <div className={styles.navItem}>
                            <span style={{ fontWeight: 'bold' }} onClick={() => window.location.href = '/'}>LOGO</span>
                        </div>
                        <div className={`${styles.navItem} ${styles.active}`}>
                            <span onClick={() => window.location.href = '/catalog/men' } >Men</span>
                        </div>
                        <div className={styles.navItem}>
                            <span onClick={() => window.location.href = '/catalog/women'}>Woman</span>
                        </div>
                        <div className={styles.navItem}>
                            <span onClick={() => window.location.href = '/catalog/kids'}>Kids</span>
                        </div>
                        <div className={styles.navItem}>
                            <span onClick={() => window.location.href = '/catalog/sale'}>Sale</span>
                        </div>
                        <div className={styles.navItem}>
                            <span onClick={() => window.location.href = '/catalog/collection'}>Collections</span>
                        </div>
                        <div className={styles.navItem}>
                            <span onClick={() => window.location.href = '/blog'}>Blog</span>
                        </div>
                    </div>

                    <div className={styles.navItemRight}>
                        <div className={styles.searchLink}>
                            <div>
                                <img src={search} alt={'search'} className={styles.searchBtn}
                                     onClick={() => setStartSearch(true)}/>
                            </div>
                        </div>
                        <div>
                            <input type="search" className={`${styles.search}`} placeholder="Search"
                                   onChange={(e) => setSearchVal(e.target.value)}
                                   onKeyPress={(e) => handleKeyPress(e)}/>
                        </div>
                        <div>
                            <Link to="/cart" className={`${styles.cartContainer}`}>
                                <img src={cartImg.img} className={styles.imgCart} alt={'cart'}/>
                                <span className={`${cartImg.spanCountStyle} ${styles.cartBadge}`}>{cartCount}</span>
                            </Link>
                        </div>
                        <div>

                             {/*add link to profile Btn*/}
                            <span className={'d-inline-block'}>
                                <img src={imgProfile} className={styles.imgProfile} alt={"profile"}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.lineDevider}/>
            </div>
        </div>
    );
}


    export default Header;