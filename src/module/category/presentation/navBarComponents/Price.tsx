import React from 'react';
import {price} from "../../constants";

const Price:React.FC = () => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                    Price
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse show"
                 aria-labelledby="flush-headingTwo">
                <div className="accordion-body p-0 pb-4">
                    {price.map((item)=>
                        <div className="form-check mb-1" key={item.id}>
                            <input className="form-check-input me-2" name="flexRadioDefault" type="radio" value={item.id}/>
                            <label className="form-check-label">{item.name}</label>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Price;