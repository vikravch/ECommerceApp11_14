import React, {useEffect, useState} from 'react';
import styles from "./Header.module.css";
import img from '../icons/shopping-bag.png';
import imgEmpty from '../icons/shoppingBagEmpty.png';
import search from '../icons/search.png';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import imgProfile from "../icons/imgProfile.png";
import DropDownMenu from "./DropDownMenu";

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
                    <div className={'d-lg-none'}>
                        <DropDownMenu />
                    </div>


                    <div className={styles.leftNav + ' collapse navbar-collapse'}>
                        <div className={styles.navItem}>
                            <Link className={styles.logo} to={'/'}>LOGO</Link>
                        </div>
                        <div className={`${styles.navItem} ${styles.active}`}>
                            <Link className={styles.link} to={'/catalog/men'} >Men</Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link className={styles.link} to={'/catalog/women'}>Woman</Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link className={styles.link} to={'/catalog/kids'}>Kids</Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link className={styles.link} to={'/catalog/sale'}>Sale</Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link className={styles.link} to={'/catalog/collection'}>Collections</Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link className={styles.link} to={'/blog'}>Blog</Link>
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
                            <input type="search"
                                   className={`${styles.search}`}
                                   placeholder="Search"
                                   onChange={(e) => setSearchVal(e.target.value)}
                                   onKeyDown={(e) => handleKeyPress(e)}
                            />
                        </div>
                        <div>
                            <Link to="/cart" className={`${styles.cartContainer}`}>
                                <img src={cartImg.img} className={styles.imgCart} alt={'cart'}/>
                                <span className={`${cartImg.spanCountStyle} ${styles.cartBadge}`}>{cartCount}</span>
                            </Link>
                        </div>
                        <div>
                            <Link to={profileBtn} className={'d-inline-block'}>
                                <img src={imgProfile} className={styles.imgProfile} alt={"profile"}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.lineDevider}/>
            </div>
        </div>
    );
}


    export default Header;