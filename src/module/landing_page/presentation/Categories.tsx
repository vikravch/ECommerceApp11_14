import React from 'react';
import style from "../styles/categories.module.css";
import vector from "../images/group11/vector.png"

const Categories = () => {
    return (
        <div className={style.group11}>
            <h4 className={style.categories}>Categories</h4>
            <div className={style.mask_group_men}>
                <div className={style.rectangle47}>
                    <div className={style.img1}>
                        <div className={style.text_men}>Men</div>
                        <div className={style.group6}>
                            <div className={style.explore_men}>Explore</div>
                            <div className={style.arrow_men}>
                                <img src={vector} className={style.arrow_vector_men}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.mask_group_women}>
                    <div className={style.rectangle49}>
                        <div className={style.img2}>
                            <div className={style.text_women}>Women</div>
                            <div className={style.group2}>
                                <div className={style.explore}>Explore</div>
                                <div className={style.arrow}>
                                    <img src={vector} className={style.arrow_vector}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            <div className={style.mask_group_sale}>
            <div className={style.rectangle51}>
                    <div className={style.img4}>
                        <div className={style.text_sale}>Sale</div>
                        <div className={style.group2}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.mask_group_kids}>
                <div className={style.rectangle48}>
                    <div className={style.img3}>
                        <div className={style.text_kids}>Kids</div>
                        <div className={style.group4}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.mask_group_kids}>
                <div className={style.rectangle50}>
                    <div className={style.img5}>
                        <div className={style.text_collection}>Collections</div>
                        <div className={style.group5}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;