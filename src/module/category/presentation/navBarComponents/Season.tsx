import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import {getSeasonsList} from "./redux/asyncActions";
import {convertToSpaceFormat} from "../../../../general/common/tools";

const Season = (props:any) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSeasonsList())
    }, []);

    const seasonsData = useSelector<Store, Array<string>>(state => state.categoryPage.SeasonsData)

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
            <div id="flush-collapseSeven" className={`accordion-collapse collapse ${!props.isButtonFilterVisible ? 'show' : ''}`}
                 aria-labelledby="flush-headingSeven">
                <div className="accordion-body p-0 pb-4">
                    {seasonsData.map((item, index)=>
                        <div key={index} className="form-check mb-1">
                            <input className="form-check-input me-2" type="checkbox" value=""/>
                            <label className="form-check-label">
                                {convertToSpaceFormat(item).toLowerCase()}
                            </label>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Season;