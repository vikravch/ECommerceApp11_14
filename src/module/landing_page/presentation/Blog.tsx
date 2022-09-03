import React from 'react';
import style from "../styles/blog.module.css";
import vector_clock from "../images/post_small/clock.png"

const Blog = () => {
    return (
        <div className="py-5">
            <h1 className={style.blog_text}>Blog</h1>
            <section className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card border-0">
                            <div className="{style.post_small_text}">
                                <div className={style.image}>
                                    <h3 className={style.text_reach}>Reach Your
                                        Fitness Goals with the our Training Club App (NTC)</h3>
                                    <div className={style.statistics}>
                                        <div className={style.text_states}>
                                            <div className={style.icon_clock}>
                                                <img src={vector_clock} className={style.vector_clock}/>
                                            </div>
                                            <div className={style.text_layout}>
                                                <div className={style.data}>07.08.2020</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-text border-0">
                            <div className="{style.post_small_workout}">
                                <div className={style.image}>
                                    <div className="{style.rectangle4}">
                                        <img src={require ("../images/blog/blog_img_1.png")} alt="" />
                                    </div>
                                    <h3 className={style.text_workout}>Workout From Home Routines: Tips and Best Practices</h3>
                                    <div className={style.statistics}>
                                        <div className={style.text_states}>
                                            <div className={style.icon_clock}>
                                                <img src={vector_clock} className={style.vector_clock}/>
                                            </div>
                                            <div className={style.text_layout}>
                                                <div className={style.data}>07.08.2020</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <div className="{style.post_small_train}">
                                <div className={style.image}>
                                    <div className={style.rectangle}></div>
                                    <h3 className={style.text_train}>Train The Way You Want: Energise Your Routine with our Growing Library of Workout  </h3>
                                    <div className={style.statistics}>
                                        <div className={style.text_states}>
                                            <div className={style.icon_clock}>
                                                <img src={vector_clock} className={style.vector_clock}/>
                                            </div>
                                            <div className={style.text_layout}>
                                                <div className={style.data}>07.08.2020</div>
                                            </div>
                                        </div>
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

export default Blog;