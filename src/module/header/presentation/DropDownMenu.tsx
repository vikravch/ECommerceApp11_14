import React, {useEffect, useState} from "react";

import styles from "./Header.module.css";

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
                    )}
                </div>

            </div>
            </div>
        </>
    );
};

export default DropDownOut;
