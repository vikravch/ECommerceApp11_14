import React from 'react';
import './profileStyle.css';
import ProfileDetails from './ProfileDetails';
import OrdersDetails from "./OrdersDetails";
import Header from "../../header/presentation/Header";

const ProfilePage:React.FC = () => {
    return (
        <>
            <Header/>
            <div className={'lineDevider'}/>
        <div className={'container fonts'}>
            <div className={'breadcrums'}>Breadcrums/ bread/ crums</div>
            <div className={'row justify-content-evenly pt-4'}>
                <div className={'col-4 details h-50'}>
                    <ProfileDetails/>
                </div>
                <div className={'col-8'}>
                    <OrdersDetails/>
                </div>
            </div>
        </div>
            </>
    );
};

export default ProfilePage;