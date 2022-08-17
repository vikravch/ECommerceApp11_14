import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Product from "../../product_page/domain/model/Product";
import {getProductDetailsAction} from "../../product_page/redux/asyncActions";

const CheckoutPage:React.FC = ()=> {
    return (
        <React.Fragment>
            <div className="row g-5">
                    <div className="col-md-5 col-lg-4">
                        <div className="rounded-2 border border-1 p-2">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text">Goods</span>
                            </h4>
                        </div>
                        <div className="rounded-2 border border-1 p-2 mt-2">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text">Summary</span>
                            </h4>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Subtotal</p>
                                    </div>
                                    <p className="my-0">$290.00</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Estimated Shipping & Handling</p>
                                    </div>
                                    <p className="my-0">$8.00</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Promocode</p>
                                    </div>
                                    <p className="my-0 text-primary">- $50</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Total</strong>
                                    <strong>$248</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">

                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-2">
                                    <h4 className="mb-2">Contacts</h4>
                                </div>
                                <div className="col-sm-10">
                                    <hr className="my-3"/>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                           required/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Second name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                           required/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email" className="form-label">Email <span
                                        className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="text" className="form-control" id="phone" placeholder="" value=""
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid phone is required.
                                    </div>
                                </div>


                                    <div className="col-sm-2">
                                        <h4 className="mb-2">Address</h4>
                                    </div>
                                    <div className="col-sm-10">
                                        <hr className="my-3"/>
                                    </div>


                                <div className="col-sm-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="zip" className="form-label">ZIP code</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required/>
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio1" value="option1" checked/>
                                    <label className="form-check-label mx-lg-2" htmlFor="inlineRadio1">Standard</label>
                                    <label className="text-muted text-sm">Free, 10 – 14 days</label>
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label mx-lg-2" htmlFor="inlineRadio2">Premium</label>
                                    <label className="text-muted text-sm ">$10, 1 – 3 days</label>
                                </div>


                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                           required/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="wishes" className="form-label">Wishes</label>
                                    <textarea className="form-control" id="wishes" placeholder="Type your wishes"
                                           />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <h4 className="mb-2">Payment</h4>
                                </div>
                                <div className="col-md-10">
                                    <hr className="my-3"/>
                                </div>
                            </div>
                                    <div className="my-3">


                                        <div className="form-check form-check-inline">
                                            <input id="credit" name="paymentMethod" type="radio"
                                                   className="form-check-input" checked required/>
                                                <label className="form-check-label" htmlFor="credit">Visa</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input id="debit" name="paymentMethod" type="radio"
                                                   className="form-check-input" required/>
                                                <label className="form-check-label" htmlFor="debit">Master card</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input id="paypal" name="paymentMethod" type="radio"
                                                   className="form-check-input" required/>
                                                <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                        </div>
                                    </div>

                                    <div className="row gy-3 mb-4">
                                        <label htmlFor="cc-number" className="form-label">Card info</label>
                                        <div className="input-group w-75 mt-0">
                                                <input type="text" className="form-control w-50" id="cc-number" placeholder="0000 0000 0000 0000"
                                                       required/>
                                                <input type="text" className="form-control w-25" id="cc-expiration"
                                                       placeholder="MM / YY" required/>
                                                <input type="text" className="form-control w-25" id="cc-cvv" placeholder="CVV"
                                                       required/>
                                        </div>
                                    </div>

                                        <button className="w-30 btn btn-primary" type="submit">Purchase for 100$
                                        </button>
                        </form>
                    </div>
            </div>
        </React.Fragment>
    )
}
export default CheckoutPage;