import React, {useEffect} from 'react';
import style from './Spinner.module.css';
import Skeleton from "../category/presentation/Skeleton";
import styles from "../header/presentation/Header.module.css";

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
            </div>
            <div className={style.spinnerOverlay}>
                <div className={style.spinner}/>
            </div>
        </>
    );
};

export default Spinner;