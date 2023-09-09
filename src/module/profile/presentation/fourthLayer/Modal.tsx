import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import Profile from "../../domain/model/Profile";

const Modal:React.FC = () => {
    const profile = useSelector<Store, Profile>(state => state.profilePage.profile);
    const [data, setData] = useState({});

    const updateData = (e: any) => {
        setData({...data, [e.target.id]: e.target.value});
    }

    return (
        <div className="modal fade" id="modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">Update profile</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body container">
                        <form id={"modal-form"} onSubmit={(e)=>{
                            e.preventDefault();
                            console.log(data);
                        }}>
                            <div className="row row-cols-1 row-cols-sm-2 mb-3">
                                <div>
                                    <label htmlFor="name" className="col-form-label gray">First name:</label>
                                    <input type="text" pattern={"^[a-zA-Z][a-zA-Z \\-]{2,24}$"}
                                           className="form-control" id="name" defaultValue={profile.name}
                                           placeholder={"Name"} required onChange={e => updateData(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="surname" className="col-form-label gray">Second name:</label>
                                    <input type="text" pattern={"^[a-zA-Z][a-zA-Z \\-]{2,24}$"}
                                           className="form-control" id="surname" defaultValue={profile.surname}
                                           placeholder={"Surname"} required onChange={e => updateData(e)}/>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 mb-3">
                                <div>
                                    <label htmlFor="phone" className="col-form-label gray">Phone number:</label>
                                    <input type="text" pattern={"^\\d{10}$"} className="form-control" id="phone"
                                           defaultValue={profile.phone} placeholder={"(123) 456-7890"}
                                           onChange={e => updateData(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="country" className="col-form-label gray">Country:</label>
                                    <input type="text" pattern={"^[a-zA-Z][a-zA-Z\\-]{2,15}$"}
                                           className="form-control" id="country" defaultValue={profile.country}
                                           placeholder={"England"} onChange={e => updateData(e)}/>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 mb-3">
                                <div>
                                    <label htmlFor="city" className="col-form-label gray">City:</label>
                                    {/*TODO defaultValue={profile.country}*/}
                                    <input type="text" pattern={"^[a-zA-Z][a-zA-Z\\-]{2,15}$"}
                                           className="form-control" id="city" placeholder={"London"}
                                           onChange={e => updateData(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="street" className="col-form-label gray">Street:</label>
                                    {/*TODO defaultValue={profile.zipCode}*/}
                                    <input type="text" pattern={"^[a-zA-Z][a-zA-Z\\-]{2,15}$"}
                                           className="form-control" id="street" placeholder={"Baker"}
                                           onChange={e => updateData(e)}/>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 mb-3">
                                <div>
                                    <label htmlFor="apartment" className="col-form-label gray">Apartment:</label>
                                    {/*TODO defaultValue={profile.country}*/}
                                    <input type="text" pattern={"^[1-9]\\d{0,3}[a-zA-Z]?$"}
                                           className="form-control" id="apartment" placeholder={"221b"}
                                           onChange={e => updateData(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="zipCode" className="col-form-label gray">Zip-code:</label>
                                    <input type="number" min={"1"} max={"999999"}
                                           className="form-control" id="zipCode" defaultValue={profile.zipCode}
                                           placeholder={"_ _ _ - _ _ _"} onChange={e => updateData(e)}/>
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