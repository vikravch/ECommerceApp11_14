import React from 'react';
import style from "../styles/categories.module.css";
import vector from "../images/group11/vector.png"

const Categories = () => {
    return (
        <div className={style.categories}>
            <div className={style.big}>

                <div className={style.img1}>
                    <div className={style.text_men}>Men</div>
                    <div className={style.group2}>
                        <div className={style.explore}>Explore</div>
                        <div className={style.arrow}>
                            <img src={vector} className={style.arrow_vector}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.small}>
                    <div className={style.img2}>
                        <div className={style.text}>Women</div>
                        <div className={style.group2}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.small}>
                    <div className={style.img3}>
                        <div className={style.text}>Kids</div>
                        <div className={style.group2}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className={style.small}>
                    <div className={style.img4}>
                        <div className={style.text}>Sale</div>
                        <div className={style.group2}>
                            <div className={style.explore}>Explore</div>
                            <div className={style.arrow}>
                                <img src={vector} className={style.arrow_vector}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.small}>
                    <div className={style.img5}>
                        <div className={style.text}>Collection</div>
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
    );
};

export default Categories;