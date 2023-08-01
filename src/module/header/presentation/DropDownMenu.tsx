import React, {useEffect, useState} from "react";

import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const DropDownOut: React.FC = (): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    useEffect(() => {
        console.log('use effect')
        console.log(showDropDown)

    }, [showDropDown]);

    const toggleDropDown = () => {
        console.log("toggle show")
        console.log(showDropDown)
        setShowDropDown(!showDropDown);
    };

    return (
        <>
            <div>
                <div className={styles.humburger} onClick={(): void => toggleDropDown()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div
                className={showDropDown ? 'styles.activeMenu' : 'styles.no_activeMenu'}
                >
                <div>
                    {showDropDown && (
                        <div className={styles.mobileNav}>
                            <div className={styles.navItem}>
                                <Link className={styles.logo} to={'/'} onClick={(): void => toggleDropDown()}>LOGO</Link>
                            </div>
                            <div className={`${styles.navItem} ${styles.active}`}>
                                <Link className={styles.link} to={'/catalog/men'} onClick={(): void => toggleDropDown()}>Men</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link className={styles.link} to={'/catalog/women'} onClick={(): void => toggleDropDown()}>Woman</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link className={styles.link} to={'/catalog/kids'} onClick={(): void => toggleDropDown()}>Kids</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link className={styles.link} to={'/catalog/sale'} onClick={(): void => toggleDropDown()}>Sale</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link className={styles.link} to={'/catalog/collection'} onClick={(): void => toggleDropDown()}>Collections</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link className={styles.link} to={'/blog'} onClick={(): void => toggleDropDown()}>Blog</Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            </div>
        </>
    );
};

export default DropDownOut;
