import React, { useState } from "react";
import DropDownIn from "./DropDownIn";
import styles from "../presentation/ProductPage.module.css";
// styles from ProductPage module
type DropDownOutProps = {
   title: string;

};

const DropDownOut: React.FC<DropDownOutProps> = ({title}): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const text = () => {
        return ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "];
    };

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
                        text={text()}
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
