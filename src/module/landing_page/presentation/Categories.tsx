import React from 'react';
import style from "../styles/categories.module.css";
import vector from "../images/group11/vector.png"

const Categories = () => {
    return (
        <div className={style.group11}>
            <h4 className={style.categories}>Categories</h4>
            <div >
            <div className={style.rectangle47}>
                <div className={style.mask_group_men}>
                    <div className={style.img1}>
                        <div className={style.text_men}>Men</div>
                        <div className={style.group6}>
                            <div className={style.explore_men}>Explore</div>
                            <div className={style.arrow_right}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                {/*<div className={style.rectangle49}>*/}
                {/*    <div className={style.mask_group_women}>*/}
                {/*        <div className={style.img2}>*/}
                {/*        /!*    <div className={style.text_men}>Men</div>*!/*/}
                {/*        /!*    <div className={style.group6}>*!/*/}
                {/*        /!*        <div className={style.explore_men}>Explore</div>*!/*/}
                {/*        /!*        <div className={style.arrow_right}>*!/*/}
                {/*        /!*            <img src={vector} className={style.arrow_vector}/>*!/*/}
                {/*        /!*        </div>*!/*/}
                {/*            </div>*/}

                {/*        /!*</div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Categories;