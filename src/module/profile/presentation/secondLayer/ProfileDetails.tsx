import React, {useEffect} from 'react';
import '../profileStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Profile from "../../domain/model/Profile";
import ProfileItem from "../thirdLayer/ProfileItem";
import Modal from "../fourthLayer/Modal";
import {logoutAction} from "../../redux/asyncActions";
import {useNavigate} from "react-router-dom";

const ProfileDetails:React.FC = () => {
    const profile = useSelector<Store, Profile>(state => state.profilePage.profile);
    const login = useSelector<Store, string>(state => state.loginPage.user.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        //TODO rerender after profile change
    }, [profile]);

    const profileView = {
        "Email": login ? login : profile.email,
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
                    <div className={"col-8 col-sm-9 p-2"}>
                        <div className={"name"}>{profile.name} {profile.surname}</div>
                        <div className={"gray logout"}
                             onClick={() => {navigate("/"); dispatch(logoutAction())}}>Logout</div>
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