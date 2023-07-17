import React from 'react';
import style from "./ArticleItem.module.css";
import {Link} from "react-router-dom";
import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";
import clock from "../../../landing_page/images/blog/clock.png";
import blog1 from "../../../landing_page/images/blog/blog_img_1.png";
import styles from "../../../landing_page/styles/blog.module.scss";

const ArticleItem: React.FC<any> = (props) => {

    return (
        <div className={style.blog + ' col'} onClick={getArticleDetailsAction(props.id)}>
            <div className={style.link} >
                <img width={410} height={270} src={props.img} alt="Blog"/>

                <h5>{props.title}</h5>

                <div className={style.clock}>
                    {/*<img className={style.clock_img} src={clock}/>*/}
                    <b>{props.date}</b>
                </div>
                </div>
        </div>
    );
};

export default ArticleItem;
