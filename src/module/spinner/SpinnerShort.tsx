import React, {useEffect} from 'react';
import style from './Spinner.module.css';
import styles from "../header/presentation/Header.module.css";

const SpinnerShort: React.FC = () => {

    useEffect(() => {
        console.log("spinner mounted")
        document.body.classList.add(styles.lockScroll);
    }, []);

    useEffect(() => {
        console.log('spinner unmounted')
        return () => {
            document.body.classList.remove(styles.lockScroll)
        }
    });

    return (
        <>
            <div className={style.spinnerOverlay}>
                <div className={style.spinner}/>
            </div>
        </>
    );
};

export default SpinnerShort;