import React from 'react';
import './profileStyle.css';

interface Props{
    k: string,
    val: string
}

const ProfileItem:React.FC<Props> = (props: Props) => {
    return props.val.trim() != "" ? (
        <div className={"row pb-3"}>
            <div className={"p-0 gray fw-400"}>{props.k}</div>
            <div className={"p-0"}>{props.val}</div>
        </div>
    ) : (
        <div className={"row pb-3"}>
            <div className={"p-0 gray fw-400"}>{props.k}</div>
            <div className={"edit"}>+Add</div>
        </div>
    );
};

export default ProfileItem;