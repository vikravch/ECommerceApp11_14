import React from 'react';
import '../profileStyle.css';
import ProfileDetails from '../secondLayer/ProfileDetails';
import OrdersDetails from "../secondLayer/OrdersDetails";
import {useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import SpinnerShort from "../../../spinner/SpinnerShort";

const ProfilePage:React.FC = () => {
    const isLoading = useSelector<Store, boolean>(state => state.profilePage.isLoading);

    return (
        <div className={'container p-0 fonts min-height min-width'}>
            <div className={'breadcrums main'}>Main / <span className={'black'}>Profile</span></div>
            <div className={'row m-0 pt-4'}>
                <div className={' col-12 col-md-8 col-xl-4 details h-50'}>
                    <ProfileDetails/>
                </div>
                <div className={'col-12 col-xl-8 p-0 ps-xl-3 pe-xl-3 mb-5'}>
                    <OrdersDetails/>
                </div>
            </div>
            {isLoading ? <SpinnerShort/> : null}
        </div>
    );
};

export default ProfilePage;