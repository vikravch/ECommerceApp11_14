import React from 'react';

const Brand:React.FC = () => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                        aria-expanded="false" aria-controls="flush-collapseFive">
                    Brand
                </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse show"
                 aria-labelledby="flush-headingFive">
                <div className="accordion-body p-0 pb-4">
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Levi's
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Jungmaven
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Sunspel
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Uniqlo
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Aime Leon Dore
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;