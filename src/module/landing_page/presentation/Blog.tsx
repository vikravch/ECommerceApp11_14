import React, {useEffect} from 'react';
import styles from "../styles/blog.module.scss";
import blog2 from '../images/blog/blog_img_2.png'
import blog1 from '../images/blog/blog_img_1.png'
import clock from '../images/blog/clock.png'
import ArticleItem from "../../blog_page/presentation/ArticleItem/ArticleItem";
import formatDate from "../../blog_page/dateTransformer";
import ArticleInfo from "../../blog_page/domain/model/ArticlesList";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {getArticlesListAction} from "../../blog_page/redux/asyncActions";
import {blogArticles} from "../../blog_page/data/fake_api/articlesList";


const Blog = () => {
    const articlesList = useSelector<Store, Array<ArticleInfo>>(state => state.blogPage.articlesList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesListAction());
    }, []);

    return (
        <div>
            <div className={styles.container + ' row'}>
                <h1 className={styles.h1}>Blog</h1>
                <div className="d-flex row">
                    {articlesList.slice(0, 3).map((item) => (
                        <ArticleItem title={item.title} key={item.id} id={item.id} date={formatDate(item.timestampDateMod)} />
                    ))}
                </div>

            </div>
            <div className={styles.container + ' row'}>
                <h1 className={styles.h1}>Blog</h1>
                <div className="d-flex row">
                    <div className={styles.blog + ' col'}>

                        <h5 className={styles.reach}>Reach Your Fitness Goals with the our Training Club App
                            (NTC). </h5>

                        <div className={styles.clock}>
                            <img src={clock}/>
                            <b>07.08.2020</b>
                        </div>

                    </div>
                    <div className={styles.blog + ' col'}>

                        <img width={410} height={270} src={blog1} alt="Blog"/>

                        <h5>Workout From Home Routines: Tips and Best Practices</h5>

                        <div className={styles.clock}>
                            <img src={clock}/>
                            <b>07.08.2020</b>
                        </div>
                    </div>
                    <div className={styles.blog + ' col'}>

                        <img src={blog2}/>

                        <h5>Train The Way You Want: Energise Your Routine with our Growing Library of Workout</h5>

                        <div className={styles.clock}>
                            <img src={clock}/>
                            <b>07.08.2020</b>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Blog;