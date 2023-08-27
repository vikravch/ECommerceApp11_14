import React from "react";
import style from "./BlogHearers.module.css";
import formatDate from "../dateTransformer";

const BlogHeaders = (props: any) => {

    if(props.data.length === 5) {
        return (
            <div className={style.header_container}>

                    <div className={style.left_header}>
                        <div className={style.big_text_header}>{props.data[0].title}</div>
                        <button className={style.btn_read_more}>Read More</button>
                        <span>&#x1F552; {formatDate(props.data[0].timestampDateMod)}</span>
                    </div>

                    <div className={style.right_header}>
                            <div className={style.right_header_col}>
                                <div className={style.right_header_item}> <h3>{props.data[1].title}</h3>
                                    <span>&#x1F552; {formatDate(props.data[1].timestampDateMod)}</span>
                                </div>
                                <div className={style.right_header_item}> <h3>{props.data[2].title}</h3>
                                    <span>&#x1F552; {formatDate(props.data[2].timestampDateMod)}</span>
                                </div>
                            </div>
                            <div className={style.right_header_col}>
                                <div className={style.right_header_item}> <h3>{props.data[3].title}</h3>
                                    <span>&#x1F552; {formatDate(props.data[3].timestampDateMod)}</span>
                                </div>
                                <div className={style.right_header_item}> <h3>{props.data[4].title}</h3>
                                    <span>&#x1F552; {formatDate(props.data[4].timestampDateMod)}</span>
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