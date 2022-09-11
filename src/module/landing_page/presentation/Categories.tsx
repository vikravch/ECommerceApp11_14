import React from 'react';
import style from "../styles/categories.module.css";
import vector from "../images/group11/vector.png"

const Categories = () => {
    return (
        <div className="py-5">
            <h4 className={style.categories}>Categories</h4>
            <section className="container px-2 px-lg-3 mt-3 ">
                <div className="row">
                    <div className="col mb-4">
                            <div className="card border-0">
                                <div className={style.img1}>
                                    <div className={style.text_men}>Men</div>
                                    <div className={style.group2}>
                                        <div className={style.explore_men}>Explore</div>
                                        <div className={style.arrow_men}>
                                            <img src={vector} className={style.arrow_vector_men}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4 m-auto">
                            <div className="card border-0">
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
                            <div className="card border-0">
                                <div className={style.img3}>
                                    <div className={style.text_kids}>Kids</div>
                                    <div className={style.group2}>
                                        <div className={style.explore}>Explore</div>
                                        <div className={style.arrow}>
                                            <img src={vector} className={style.arrow_vector}/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4 m-auto">
                            <div className="card border-0">
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
                            <div className='card border-0'>
                                <div className={style.img5}>
                                    <div className={style.text_collection}>Collections</div>
                                    <div className={style.group2}>
                                        <div className={style.explore}>Explore</div>
                                        <div className={style.arrow}>
                                            <img src={vector} className={style.arrow_vector}/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Categories;