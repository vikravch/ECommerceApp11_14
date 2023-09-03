import React from 'react';

const Season = (props:any) => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                        aria-expanded="false" aria-controls="flush-collapseSeven">
                    Season
                </button>
            </h2>
            <div id="flush-collapseSeven" className={`accordion-collapse collapse ${props.isCollapseVisible ? 'show' : ''}`}
                 aria-labelledby="flush-headingSeven">
                <div className="accordion-body p-0 pb-4">
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Demi-season
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Summer
                        </label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input me-2" type="checkbox" value=""/>
                        <label className="form-check-label">
                            Winter
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Season;