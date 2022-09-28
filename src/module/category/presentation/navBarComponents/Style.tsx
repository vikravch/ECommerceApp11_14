import React from 'react';

const Style:React.FC = () => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                        aria-expanded="false" aria-controls="flush-collapseSix">
                    Style
                </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse show"
                 aria-labelledby="flush-headingSix">
                <div className="accordion-body p-0 pb-4">
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="radio" name="style"/>
                        <label className="form-check-label">
                            All styles
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="radio" name="style"/>
                        <label className="form-check-label">
                            A-line
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="radio" name="style"/>
                        <label className="form-check-label">
                            Graphic T-Shirts
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Style;