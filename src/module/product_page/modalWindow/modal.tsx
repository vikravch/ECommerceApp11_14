import React, { ReactNode } from "react";
import styles from './modalWindow.module.css';

interface ModalType {
    children?: ReactNode;
    imgSrc: string;
    isOpen: boolean;
    toggle: (event: React.MouseEvent<HTMLImageElement>) => void;

}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className={styles.modalOverlay} onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.modalBox}>
                        <img src={props.imgSrc} alt="imgssss"/>
                        {/*{props.children}*/}
                    </div>
                </div>
            )}
        </>
    );
}
