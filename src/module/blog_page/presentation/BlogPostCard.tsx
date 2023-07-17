import {useDispatch} from "react-redux";
import styles from "../../landing_page/styles/blog.module.scss";
import clock from "../../landing_page/images/blog/clock.png";
import React from "react";
import blog1 from "../../landing_page/images/blog/blog_img_1.png";
import formatDate from "../dateTransformer";

const BlogPostCard = (props: any) => {
    const dispatch = useDispatch()


    return (
        <>
            <div className={styles.blog + ' col'}>
                <img src={blog1} alt="#"/>
                <h5 className={styles.reach}>{props.title}</h5>

                <div className={styles.clock}>
                    <img src={clock} />
                    <b>{formatDate(props.timestampDateMod)}</b>
                </div>

            </div>
        </>

    )
};

export default BlogPostCard