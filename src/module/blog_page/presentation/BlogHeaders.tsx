import {useDispatch} from "react-redux";
import React from "react";
import style from "./BlogHearers.module.css";

const BlogHeaders = (props: any) => {
    const dispatch = useDispatch()

//TODO -> return for maped data!!! and css style
    return (
        <>
            <div className={style.headers_container}>
                <div className={'row'}>
                    <div className={style.left_header + ' col'}>
                        <div className={style.big_text_header}>LEARNING TO LOVE YOUR MENTAL HEALTH JOURNEY</div>
                        <button className={style.btn_read_more}>Read More</button>
                    </div>
                    <div className={style.right_header + ' col'}>
                        <div className={'row'}>
                            <div className={style.right_header_item + ' col-6'}>
                                <div> <h3>col 1</h3>
                                    <span>&#x1F552; {props.date}</span>
                                </div>
                                <div> <h3>col 2</h3>
                                    <span>&#x1F552; {props.date}</span>
                                </div>
                            </div>
                            <div className={style.right_header_item + ' col-6'}>
                                <div> <h3>col 3</h3>
                                    <span>&#x1F552; {props.date}</span>
                                </div>
                                <div> <h3>col 4</h3>
                                    <span>&#x1F552; {props.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*<div className={style.big_text}>*/}
            {/*    <div className={style.divider}></div>*/}
            {/*    <div className={style.big_text_article1}>*/}

            {/*    </div>*/}
            {/*    <div className={style.big_text_article2}>*/}
            {/*        <h3>Runners X Run For The Ocean</h3>*/}
            {/*        <span>&#x1F552; 07.08.2020</span>*/}
            {/*    </div>*/}
            {/*    <div className={style.big_text_article3}>*/}
            {/*        <h3>Mental and Physical Health Benefits of Yoga: Proven Results</h3>*/}
            {/*        <span>&#x1F552; 07.08.2020</span>*/}
            {/*    </div>*/}
            {/*    <div className={style.big_text_article4}>*/}
            {/*        <h3>Summer Sports - Summer Vibes</h3>*/}
            {/*        <span>&#x1F552; 07.08.2020</span>*/}
            {/*    </div>*/}
            {/*    <div className={style.divider_horizontal}></div>*/}

            {/*</div>*/}
        </>

    )
};

export default BlogHeaders