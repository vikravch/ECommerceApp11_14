import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import CartProduct from "../../cart/domain/model/CartProduct";
import {shippings} from "../../../general/data/shippings";
import Profile from "../../profile/domain/model/Profile";
import {CountryDropdown} from "react-country-region-selector";
import {createOrder} from "../redux/asyncActions";
import Order from "../domain/model/Order";
import CheckoutSuccess from "./CheckoutSuccess";

const CheckoutPage:React.FC = ()=> {
    const cartItems = useSelector<Store, Array<CartProduct>>(state => state.cartPage.cartItems);
    const cartTotal = useSelector<Store, number>(state => state.cartPage.cartTotal)
    const profile = useSelector<Store, Profile>(state => state.profileDetails.profile);
    const [orderSubmit, setOrderSubmit] = useState(false);
    const [shipping, setShipping] = useState(shippings[0].title);
    const [shippingCost, setShippingCost] = useState(0);
    const [orderSum, setOrderSum] = useState(cartTotal);
    const [country, setCountry] = useState(profile.country);
    const [zip, setZip] = useState(profile.zipCode);
    const [addr, setAddr] = useState(profile.address);
    const [wishes, setWishes] = useState('');
    const [name, setName] = useState(profile.name);
    const [lastName, setLastName] = useState(profile.surname);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);
    const dispatch = useDispatch();

    useEffect(() => {
        if (shipping === shippings[0].title) {
            setShippingCost(shippings[0].cost)
            setOrderSum(cartTotal)
        } else {
            setShippingCost(shippings[1].cost);
            setOrderSum(cartTotal + shippings[1].cost)
        }
    }, [shipping])

    const transformCartItem = (cartItem:CartProduct) => {
        return {
            prodId: +cartItem.product_id,
            color: cartItem.color,
            size: cartItem.size,
            number: cartItem.count
        }
    }

    const handleCreateOrder = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newOrder: Order = {
            orderId:Number(new Date().getTime()),
            customerId: 1050356773,
            cartItems: cartItems.map(transformCartItem),
            timestampOrderDate: Number(new Date().getTime()),
            deliveryAddr: {country: country, zip: +zip, addr: addr},
            deliveryCost: shippingCost
        }
        dispatch(createOrder(newOrder))
        setOrderSubmit(true);
    }

    return (
            <div className="container my-4" style={{maxWidth: 1070}}>
                {orderSubmit ? <CheckoutSuccess/> : (
            <div className="row g-5">
                    <div className="col-md-5 col-lg-4">
                        <div className="rounded-2 border border-1 p-2" >
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text">Goods</span>
                            </h4>
                            {cartItems.map((item) => (
                            <div className="mb-3" key={item.product_id}>
                                <div className="row g-0 m-0">
                                    <div className="col-md-5 ">
                                        <img src="http://via.placeholder.com/105x127" className="img-fluid rounded" alt="image"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body p-0">
                                            <p className="my-0 small"><label className="text-muted small my-0">#{item.product_id}</label></p>
                                            <p className="my-0 small"><strong className="card-title small my-0">{item.product_title}</strong></p>
                                            <p className="my-0 small"><label className="text-muted small my-0">Color: </label><label className="mx-1 small my-0">{item.color}</label></p>
                                            <p className="my-0 small"><label className="text-muted small my-0">Size: </label><label className="mx-1 small my-0">{item.size}</label></p>
                                            <p className="my-0 small"><label className="text-muted small my-0">Quantity: </label><label className="mx-1 small my-0">{item.count}</label></p>
                                            <p className="my-0 small"><label className="small my-0"><strong>${item.price}</strong></label></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
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
                                    <p className="my-0">${cartTotal.toFixed(2)}</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Estimated Shipping & Handling</p>
                                    </div>
                                    <p className="my-0">${shippingCost.toFixed(2)}</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Promocode</p>
                                    </div>
                                    <p className="my-0 text-primary">- $50</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Total</strong>
                                    <strong>${orderSum}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">

                        <form className="needs-validation" noValidate onSubmit={handleCreateOrder}>
                            <div className="row g-3">
                                <div className="col-sm-2">
                                    <h4 className="mb-2">Contacts</h4>
                                </div>
                                <div className="col-sm-10">
                                    <hr className="my-3"/>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text"
                                           className="form-control"
                                           id="firstName"
                                           value={name}
                                           required
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setName(e.currentTarget.value)}}/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Second name</label>
                                    <input type="text"
                                           className="form-control"
                                           id="lastName"
                                           placeholder=""
                                           value={lastName}
                                           required
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setLastName(e.currentTarget.value)}}/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email" className="form-label">Email <span
                                        className="text-muted"></span></label>
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           placeholder="you@example.com"
                                           value={email}
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="text"
                                           className="form-control"
                                           id="phone"
                                           placeholder=""
                                           value={phone}
                                           required
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setPhone(e.currentTarget.value)}}/>
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
                                    <CountryDropdown value={country} onChange={(value) => setCountry(value)} classes="form-select" id="country"/>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="zip" className="form-label">ZIP code</label>
                                    <input type="text"
                                           className="form-control"
                                           id="zip" placeholder=""
                                           required
                                           value={zip}
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setZip(e.currentTarget.value)}}/>
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <input className="form-check-input" type="radio" name="title"
                                           id="Standard" value="Standard" checked={shipping === "Standard"}
                                           onChange={(e:ChangeEvent<HTMLInputElement>) => {setShipping(e.target.value)}}/>
                                    <label className="form-check-label mx-lg-2" htmlFor="inlineRadio1">{shippings[0].title}</label>
                                    <label className="text-muted text-sm">{shippings[0].description}</label>
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-check-input" type="radio" name="title" checked={shipping === "Premium"}
                                           id="Premium" value="Premium" onChange={(e:ChangeEvent<HTMLInputElement>) => {setShipping(e.target.value)}}/>
                                    <label className="form-check-label mx-lg-2" htmlFor="inlineRadio2">{shippings[1].title}</label>
                                    <label className="text-muted text-sm ">{shippings[1].description}</label>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text"
                                           className="form-control"
                                           id="address"
                                           placeholder="1234 Main St"
                                           required
                                           value={addr}
                                           onChange = {(e: FormEvent<HTMLInputElement>) => {setAddr(e.currentTarget.value)}}/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="wishes" className="form-label">Wishes</label>
                                    <textarea className="form-control"
                                              id="wishes"
                                              value={wishes}
                                              placeholder="Type your wishes"
                                              onChange = {(e: FormEvent<HTMLTextAreaElement>) => {setWishes(e.currentTarget.value)}}
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
                                                   className="form-check-input" defaultChecked required/>
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

                                        <button className="w-30 btn btn-primary" type="submit">Purchase for ${orderSum}
                                        </button>
                        </form>
                    </div>
            </div>)}
            </div>
    )
}
export default CheckoutPage;