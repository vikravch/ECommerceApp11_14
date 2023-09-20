import React, {useEffect} from 'react';
import {getProductsByGenderAndCategory} from "../../redux/asyncActions";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesList} from "./redux/asyncActions";
import {Store} from "../../../../general/redux/storeTypes";
import {ClothingCategory} from "../../../../general/dto/APIResponseTypes";

//TODO OnClick for category items!

const Category = (props:any) => {
    const dispatch = useDispatch();

    const categoriesList = useSelector<Store, Array<ClothingCategory>>(state => state.categoryPage.CategoriesList)

    useEffect(() => {
       // getCategoriesList url/categories
        dispatch(getCategoriesList())
    }, []);

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
            <div id="category-collapse" className={`accordion-collapse collapse ${!props.isButtonFilterVisible ? 'show' : ''}`}
                 aria-labelledby="category-heading">
                <div className="accordion-body p-0 pb-4">
                    {categoriesList.map((item)=>
                        <div key={item.category_id}>
                            <input className="visually-hidden check" type="radio" name={'category'} value={item.category_name} id={item.category_id} onClick={() => dispatch(getProductsByGenderAndCategory(props.gender,item.category_name))}/>
                            <label className="form-check-label pointer" htmlFor={item.category_id}>{item.category_name}</label>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Category;