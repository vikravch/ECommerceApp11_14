import React from 'react';
import style from "../styles/categories.module.css";
import vector from "../images/group11/vector.png"
import {Link} from "react-router-dom";
import styles from "../styles/newArrivals.module.css";

const Categories = () => {
    return (
        <>
            <h1 className={styles.h1}>Categories</h1>
            <div className={style.container}>

                <div className={style.bigSubContainer}>
                    <Link className={style.link} to={'/catalog/men'}>
                        <div className={style.bigCategoryItem}>
                            <div className={style.image_Big_Container}>
                                <img src="image-url.jpg" alt="Image"/>
                            </div>
                            <div className={style.textContainer}>
                                <div className={style.titleBig}>Men</div>
                                <div className={style.exploreBtn}>
                                    <div className={style.explore}>Explore</div>
                                    <div className={style.arrow}>
                                        <img src={vector} className={style.arrow_vector}/>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className={style.smallSubContainer}>
                    <Link className={style.link} to={'/catalog/women'}>
                        <div className={style.smallCategoryItem}>
                            <div className={style.image_Small_Container}><img src="#" alt="img"/></div>
                            <div className={style.textContainer}>
                                <div className={style.titleSmall}>Women</div>
                                <div className={style.exploreBtn}>
                                    <div className={style.explore}>Explore</div>
                                    <div className={style.arrow}>
                                        <img src={vector} className={style.arrow_vector}/>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={style.link} to={'/catalog/sale'}>
                        <div className={style.smallCategoryItem}>
                            <div className={style.image_Small_Container}><img src="#" alt="img"/></div>
                            <div className={style.textContainer}>
                                <div className={style.titleSmall}>Sale</div>
                                <div className={style.exploreBtn}>
                                    <div className={style.explore}>Explore</div>
                                    <div className={style.arrow}>
                                        <img src={vector} className={style.arrow_vector}/>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={style.link} to={'/catalog/kids'}>
                        <div className={style.smallCategoryItem}>
                            <div className={style.image_Small_Container}><img src="#" alt="img"/></div>
                            <div className={style.textContainer}>
                                <div className={style.titleSmall}>Kids</div>
                                <div className={style.exploreBtn}>
                                    <div className={style.explore}>Explore</div>
                                    <div className={style.arrow}>
                                        <img src={vector} className={style.arrow_vector}/>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={style.link} to={'/catalog/collection'}>
                        <div className={style.smallCategoryItem}>
                            <div className={style.image_Small_Container}><img src="#" alt="img"/></div>
                            <div className={style.textContainer}>
                                <div className={style.titleSmall}>Collections</div>
                                <div className={style.exploreBtn}>
                                    <div className={style.explore}>Explore</div>
                                    <div className={style.arrow}>
                                        <img src={vector} className={style.arrow_vector}/>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>
            </div>
        </>


    );
};

export default Categories;