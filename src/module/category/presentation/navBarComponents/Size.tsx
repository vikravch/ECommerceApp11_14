import React from 'react';

const Size = (props:any) => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                    Size
                </button>
            </h2>
            <div id="flush-collapseThree" className={`accordion-collapse collapse ${props.isCollapseVisible ? 'show' : ''}`}
                 aria-labelledby="flush-headingThree">
                <div className="accordion-body p-0 pb-4">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="xs" disabled/>
                                <label className="form-check-label">
                                    XS
                                </label>
                            </div>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="l"/>
                                <label className="form-check-label">
                                    L
                                </label>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="s"/>
                                <label className="form-check-label">
                                    S
                                </label>
                            </div>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="xl" disabled/>
                                <label className="form-check-label">
                                    XL
                                </label>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="m"/>
                                <label className="form-check-label">
                                    M
                                </label>
                            </div>
                            <div className={'col p-0 mb-1'}>
                                <input className="form-check-input me-2" type="checkbox" value="xxl" disabled/>
                                <label className="form-check-label">
                                    XXL
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Size;