import React from 'react';
import './profileStyle.css';
import ModalAddSmall from "./ModalAddSmall";

interface Props{
    k: string,
    val: string,
    key: number
}

const ProfileItem:React.FC<Props> = (props: Props) => {
    function handleOpen(k:string) {
        console.log(k)
    }

    return props.val.trim() != "" ? (
        <div className={"row pb-3"}>
            <div className={"p-0 gray fw-400"}>{props.k}</div>
            <div className={"p-0"}>{props.val}</div>
        </div>
    ) : (
        <div className={"row pb-3"}>
            <div className={"p-0 gray fw-400"}>{props.k}</div>
            <div className={"edit"} data-bs-toggle="modal" data-bs-target={"#"+props.k} data-bs-whatever={props.k} onClick={(e)=>handleOpen(props.k)}>+Add</div>
            <ModalAddSmall keyModal={props.k}/>
        </div>
    );
};

export default ProfileItem;