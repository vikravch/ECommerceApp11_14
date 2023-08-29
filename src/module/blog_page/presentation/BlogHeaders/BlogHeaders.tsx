import React from "react";
import style from "./BlogHearers.module.css";
import {useSelector} from "react-redux";
import {Store} from "../../../../general/redux/storeTypes";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../../general/navigation/routes";
import {ApiResponseBlogHeader} from "../../../../general/dto/APIResponseTypes";

const BlogHeaders = () => {
    const headersList = useSelector<Store, Array<ApiResponseBlogHeader>>(state => state.blogPage.headersList)

    const navigate = useNavigate();
    const handleOnClick = (index: number) => () => {
        navigate(`/${routes.articlePage}/${headersList[index].id}`);
    }

    if(headersList.length === 5) {
        return (
            <div className={style.header_container}>
                <div className={style.left_header}>
                    <div className={style.big_text_header}>{headersList[0].title}</div>
                    <button className={style.btn_read_more} onClick={handleOnClick(0)}>Read More</button>
                    <span>&#x1F552; {headersList[0].timestampDateMod}</span>
                </div>
                <div className={style.right_header}>
                        <div className={style.right_header_col}>
                            <div className={style.right_header_item} onClick={handleOnClick(1)}>
                                <h3>{headersList[1].title}</h3>
                                <span>&#x1F552; {headersList[1].timestampDateMod}</span>
                            </div>
                            <div className={style.right_header_item} onClick={handleOnClick(2)}>
                                <h3>{headersList[2].title}</h3>
                                <span>&#x1F552; {headersList[2].timestampDateMod}</span>
                            </div>
                        </div>
                        <div className={style.right_header_col}>
                            <div className={style.right_header_item} onClick={handleOnClick(3)}>
                                <h3>{headersList[3].title}</h3>
                                <span>&#x1F552; {headersList[3].timestampDateMod}</span>
                            </div>
                            <div className={style.right_header_item} onClick={handleOnClick(4)}>
                                <h3>{headersList[4].title}</h3>
                                <span>&#x1F552; {headersList[4].timestampDateMod}</span>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

    else return (
        <div className={style.headers_container}>
            <div className={style.big_text_header}>No articles</div>
        </div>
    )
};

export default BlogHeaders