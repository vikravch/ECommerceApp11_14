import React, { useEffect, useState } from 'react';
import styles from "../presentation/ProductPage.module.css";

type DropDownInProps = {
    text: string;
    showDropDown: boolean;
    toggleDropDown: Function;

};

const DropDownIn: React.FC<DropDownInProps> = ({
                                               text
                                           }: DropDownInProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);
return (<>
    <div className={styles.dropdownContent}>
    <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
       <p>{text}</p>
    </div>
    </div>
</>);
};

export default DropDownIn;
