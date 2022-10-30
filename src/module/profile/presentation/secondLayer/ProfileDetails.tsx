import React, {useEffect} from 'react';
import '../profileStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Profile from "../../domain/model/Profile";
import {getProfileDetailsAction} from "../../redux/asyncActions";
import ProfileItem from "../thirdLayer/ProfileItem";
import Modal from "../fourthLayer/Modal";

const ProfileDetails:React.FC = () => {
    const profile = useSelector<Store, Profile>(state => state.profileDetails.profile);
    const isLoading = useSelector<Store, boolean>(state => state.profileDetails.isLoading);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProfileDetailsAction(sessionStorage.getItem("token") || ''));
    }, []);

    useEffect(()=>{
        // TODO rerender after profile change
    }, [profile]);

    const profileView = {
        "Email": profile.email,
        "Phone": profile.phone == "" ? "" :
            `(${profile.phone.substring(0,3)}) ${profile.phone.substring(3,6)}-${profile.phone.substring(6)}`,
        "Address": `${profile.address} ${profile.zipCode}`,
        "Country": profile.country
    }

    return (
        <>
            <div className={"container pb-1"}>
                <div className={"row justify-content-evenly p-20px"}>
                    <div className={"col-3 avatar"}>{profile.name[0]}{profile.surname[0]}</div>
                    <div className={"col-9 p-2"}>
                        <div className={"name"}>{profile.name} {profile.surname}</div>
                        <div className={"gray"}>Logout</div>
                    </div>
                </div>
                <div className={"row borderLine"}/>
                <div className={"pt-3 position-relative"}>
                    <div className={"pt-3 text-end edit position-absolute top-0 end-0"}
                         data-bs-toggle="modal" data-bs-target="#modal">Edit</div>
                    {Object.values(profileView).map((item, index)=>
                        <ProfileItem key={index} k={Object.keys(profileView)[index]} val={item}/>)}
                </div>
            </div>
            <Modal/>
        </>
    );
};

export default ProfileDetails;