import React from 'react';
import {useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Profile from "../../domain/model/Profile";

const Modal:React.FC = () => {
    const profile = useSelector<Store, Profile>(state => state.profileDetails.profile);

    return (
        <div className="modal fade" id="modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">Change profile</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body container">
                        <form id={"modal-form"} onSubmit={(e)=>{
                            e.preventDefault();
                            //console.log(e.target.surname.value);
                        }}>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label htmlFor="name" className="col-form-label gray">First name:</label>
                                    <input type="text" className="form-control" id="name" defaultValue={profile.name} required/>
                                </div>
                                <div className={"col-6"}>
                                    <label htmlFor="surname" className="col-form-label gray">Second name:</label>
                                    <input type="text" className="form-control" id="surname" defaultValue={profile.surname} required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className={"col-6"}>
                                    <label htmlFor="email" className="col-form-label gray">Email:</label>
                                    <input type="email" className="form-control" id="email" defaultValue={profile.email} placeholder={"you@example.com"} required/>
                                </div>
                                <div className={"col-6"}>
                                    <label htmlFor="phone" className="col-form-label gray">Phone number:</label>
                                    <input type="text" className="form-control" id="phone" defaultValue={profile.phone} placeholder={"(123) 456-7890"}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className={"col-6"}>
                                    <label htmlFor="country" className="col-form-label gray">Country:</label>
                                    <input type="text" className="form-control" id="country" defaultValue={profile.country} placeholder={"England"}/>
                                </div>
                                <div className={"col-6"}>
                                    <label htmlFor="zipCode" className="col-form-label gray">Zip-code:</label>
                                    <input type="number" className="form-control" id="zipCode" defaultValue={profile.zipCode} placeholder={"_ _ _ - _ _ _"}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className={"col-12"}>
                                    <label htmlFor="address" className="col-form-label gray">Address:</label>
                                    <input type="text" className="form-control" id="address" defaultValue={profile.address} placeholder={"1234 Main St"}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary buttons bg-black" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary buttons" form={"modal-form"} data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;