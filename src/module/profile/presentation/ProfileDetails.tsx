import React, {useEffect} from 'react';
import './profileStyle.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Profile from "../domain/model/Profile";
import {getProfileDetailsAction} from "../redux/asyncActions";

const ProfileDetails:React.FC = () => {
    const {uid} = useParams<string>();
    const profile = useSelector<Store, Profile>(state => state.profileDetails.profile);
    const isLoading = useSelector<Store, boolean>(state => state.profileDetails.isLoading);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(uid){
            dispatch(getProfileDetailsAction(uid));
            /*getProductDetails(productId).then((data)=>{
            console.log(data);})*/
        }
    }, [uid]);

    return (
        <>
            <div className={"container pb-1"}>
                <div className={"row justify-content-evenly p-20px"}>
                    <div className={"col-3 avatar"}>DB</div>
                    <div className={"col-9 p-2"}>
                        <div className={"name"}>Debbie Baker</div>
                        <div className={"gray"}>Logout</div>
                    </div>
                </div>
                <div className={"row borderLine"}/>
                <div className={"row row-cols-2 justify-content-between pt-3 pb-3"}>
                    <div className={"col p-0 gray fw-400"}>Email</div>
                    <div className={"col p-0 text-end edit "}>Edit</div>
                    <div className={"col p-0"}>debbie.baker@gmail.com</div>
                </div>
                <div className={"row pb-3"}>
                    <div className={"p-0 gray fw-400"}>Phone</div>
                    <div className={"p-0"}>(603) 555-0123</div>
                </div>
                <div className={"row pb-3"}>
                    <div className={"p-0 gray fw-400"}>Address</div>
                    <div className={"p-0"}>2464 Royal Ln. Mesa, New Jersey 45463</div>
                </div>
                <div className={"row pb-3"}>
                    <div className={"p-0 gray fw-400"}>Card</div>
                    <div className={"p-0"}>**** **** **** 2154</div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetails;