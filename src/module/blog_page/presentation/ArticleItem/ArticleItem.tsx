import React from 'react';
import style from "./ArticleItem.module.css";
import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";
import {routes} from "../../../../general/navigation/routes";

const ArticleItem: React.FC<any> = (props) => {

    console.log(props.key)

    return (
        <div>
            <div className={style.blog} >
                <div>
                    <a href={`/${routes.articlePage}/:articleId`}>
                        <img width={410} height={270} src={props.img} alt="Blog"/>
                        </a>
                        <h5>{props.title}</h5>

                        <div className={style.clock}>
                            <b>{props.date}</b>
                        </div>
                </div>
            </div>
        </div>

);
};

export default ArticleItem;
