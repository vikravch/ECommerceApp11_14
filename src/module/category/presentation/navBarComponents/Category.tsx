import React from 'react';
import {categories} from "../../constants";
import {getProductsByGenderAndCategory} from "../../redux/asyncActions";
import {useDispatch} from "react-redux";

const Category = (props:any) => {
    const dispatch = useDispatch();
    return (
        <div className="accordion-item border-0">
            <div className={"m-0 borderLine"}/>
            <h2 className="accordion-header" id="category-heading">
                <button className="accordion-button collapsed navBtn border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#category-collapse"
                        aria-expanded="false" aria-controls="category-collapse">
                    Category
                </button>
            </h2>
            <div id="category-collapse" className="accordion-collapse collapse show"
                 aria-labelledby="category-heading">
                <div className="accordion-body p-0 pb-4">
                    {categories.map((item)=>
                        <div key={item.id}>
                            <input className="visually-hidden check" type="radio" name={'category'} value={item.name} id={item.id} onClick={() => dispatch(getProductsByGenderAndCategory(props.gender,item.URL))}/>
                            <label className="form-check-label pointer" htmlFor={item.id}>{item.name}</label>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Category;