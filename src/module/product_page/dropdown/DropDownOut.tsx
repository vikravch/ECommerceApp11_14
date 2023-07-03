import React, { useState } from "react";
import DropDownIn from "./DropDownIn";
import styles from "../presentation/ProductPage.module.css";
// styles from ProductPage module
type DropDownOutProps = {
   title: string;
   text: string;

};

const DropDownOut: React.FC<DropDownOutProps> = ({title, text}): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <>
            <div className={styles.dropdown}>

            <div
                className={showDropDown ? "active" : undefined}
                onClick={(): void => toggleDropDown()}
            >
                <div>{title}</div>
                {showDropDown && (
                    <DropDownIn
                        text={text}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                    />
                )}
            </div>
            </div>
        </>
    );
};

export default DropDownOut;
