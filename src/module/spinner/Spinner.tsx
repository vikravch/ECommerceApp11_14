import React, {useEffect} from 'react';
import style from './Spinner.module.css';
import Skeleton from "../category/presentation/Skeleton";
import styles from "../header/presentation/Header.module.css";
import ContentLoader from "react-content-loader";

const Spinner: React.FC = () => {

    useEffect(() => {
        console.log("spinner mounted")
        document.body.classList.add(styles.lockScroll);
    }, []);

    useEffect(() => {
        console.log('spinner unmounted')
        return () => {
            document.body.classList.remove(styles.lockScroll)
        }
    }); // TODO check on deploy

    return (
        <>
            <div className={'container ' + style.bgContent}>
                <p className={style.main}>Loading... / </p>
                <div className={'row row-cols-4 justify-content-center p-0 m-0 mt-2 mb-4'}>
                    <Skeleton/><Skeleton/><Skeleton/><Skeleton/>
                </div>
                <div className={'row row-cols-1 justify-content-center p-0 m-0 mb-4'}>
                    <ContentLoader
                        speed={3}
                        viewBox="0 0 100 27"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="1" ry="1" width="25" height="1"/>
                        <rect x="30" y="0" rx="1" ry="1" width="40" height="1"/>
                        <rect x="75" y="0" rx="1" ry="1" width="25" height="1"/>
                        <rect x="0" y="2" rx="1" ry="1" width="55" height="1"/>
                        <rect x="60" y="2" rx="1" ry="1" width="40" height="1" />
                        <rect x="0" y="4" rx="1" ry="1" width="35" height="1"/>
                        <rect x="40" y="4" rx="1" ry="1" width="60" height="1"/>
                        <rect x="0" y="6" rx="1" ry="1" width="100" height="5"/>
                        <rect x="0" y="12" rx="1" ry="1" width="25" height="1"/>
                        <rect x="30" y="12" rx="1" ry="1" width="40" height="1"/>
                        <rect x="75" y="12" rx="1" ry="1" width="25" height="1"/>
                        <rect x="0" y="14" rx="1" ry="1" width="55" height="1"/>
                        <rect x="60" y="14" rx="1" ry="1" width="40" height="1" />
                        <rect x="0" y="16" rx="1" ry="1" width="35" height="1"/>
                        <rect x="40" y="16" rx="1" ry="1" width="60" height="1"/>
                        <rect x="0" y="18" rx="1" ry="1" width="100" height="2"/>
                        <rect x="0" y="21" rx="1" ry="1" width="25" height="1"/>
                        <rect x="30" y="21" rx="1" ry="1" width="40" height="1"/>
                        <rect x="75" y="21" rx="1" ry="1" width="25" height="1"/>
                        <rect x="0" y="23" rx="1" ry="1" width="55" height="1"/>
                        <rect x="60" y="23" rx="1" ry="1" width="40" height="1" />
                        <rect x="0" y="25" rx="1" ry="1" width="35" height="1"/>
                        <rect x="40" y="25" rx="1" ry="1" width="60" height="1"/>
                    </ContentLoader>
                </div>
            </div>
            <div className={style.spinnerOverlay}>
                <div className={style.spinner}/>
            </div>
        </>
    );
};

export default Spinner;