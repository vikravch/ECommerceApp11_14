import React from 'react';

const Collection = (props:any) => {
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour">
                    Collection
                </button>
            </h2>
            <div id="flush-collapseFour" className={`accordion-collapse collapse ${props.isCollapseVisible ? 'show' : ''}`}
                 aria-labelledby="flush-headingFour">
                <div className="accordion-body p-0 pb-4">
                    <div><input className="visually-hidden check" type="radio" name={'collection'} id="check11"/>
                        <label className="form-check-label pointer" htmlFor="check11">All</label></div>
                    <div><input className="visually-hidden check" type="radio" name={'collection'} id="check12"/>
                        <label className="form-check-label pointer" htmlFor="check12">Super</label></div>
                    <div><input className="visually-hidden check" type="radio" name={'collection'} id="check13"/>
                        <label className="form-check-label pointer" htmlFor="check13">Super-puper</label></div>
                    <div><input className="visually-hidden check" type="radio" name={'collection'} id="check14"/>
                        <label className="form-check-label pointer" htmlFor="check14">Wow</label></div>
                    <div><input className="visually-hidden check" type="radio" name={'collection'} id="check15"/>
                        <label className="form-check-label pointer" htmlFor="check15">Trash</label></div>
                </div>
            </div>
        </div>
    );
};

export default Collection;