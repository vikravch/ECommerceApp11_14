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
    let profileBtn = sessionStorage.getItem("user") ? "/profile" : "/login";
    const navigate = useNavigate();
    // const handleOnClick = useCallback(() => navigate('/catalog/search'), [navigate]);
    let [startSearch, setStartSearch] = useState(false);

    useEffect(()=>{
        if(cartCount === 0){
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

    function handleKeyPress (event: React.KeyboardEvent<HTMLInputElement>): void {
        if(event.key === 'Enter'){
            console.log(searchVal);
            setStartSearch(true);
        }
    }

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
                    <li></li>
                    <li className={"position-absolute end-0"}>
                        <a href={''} className={styles.searchLink}><img src={search} alt={'search'} className={styles.searchBtn} onClick={()=>setStartSearch(true)}/></a>
                        <input type="search" className={`d-inline-block ${styles.search}`} placeholder="Search"
                               onChange={(e)=>setSearchVal(e.target.value)}
                               onKeyPress={(e) => handleKeyPress(e)}/>
                        <Link to="/cart" className={'d-inline-block'}>
                            <img src={cartImg.img} className={styles.imgCart} alt={'cart'}/>
                            <span className={`top-0 start-100 translate-middle badge rounded-pill bg-primary small 
                                ${cartImg.spanCountStyle}`} style={{fontSize: 9}}>{cartCount}</span>
                        </Link>
                        <a href={profileBtn} className={'d-inline-block'}>
                            <img src={imgProfile} className={'pointer'} alt={"profile"}/>
                        </a></li>
                </ul>
                <div className={styles.lineDevider}/>
            </div>
        </div>);
};

export default Header;