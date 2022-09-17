import React from 'react';
import styles from "../styles/blog.module.scss";
import blog2 from '../images/blog/blog_img_2.png'
import blog1 from '../images/blog/blog_img_1.png'
import clock from '../images/blog/clock.png'

const Blog = () => {
    return (
        <div className="d-flex flex-row">
            <div className={styles.blog}>

                <div className="styles.blog1">
                    <h5 className={styles.reach}>Reach Your Fitness Goals with the our Training Club App (NTC). </h5>

                    <div className={styles.clock}>
                        <img width={16.67} height={16.67} src={clock} />
                        <b>07.08.2020</b>
                    </div>
                </div>
            </div>


            <div className={styles.blog}>

                <img width={410} height={270} src={blog1} alt="Blog"/>

                <h5 >Workout From Home Routines: Tips and Best Practices</h5>

                <div className={styles.clock1}>
                    <img width={16.67} height={16.67} src={clock} />
                    <b>07.08.2020</b>
                </div>
            </div>
            <div className={styles.blog}>

                <img width={410} height={270} src={blog2} alt="Blog"/>

                <h5>Train The Way You Want: Energise Your Routine with our Growing Library of Workout</h5>

                <div className={styles.clock2}>
                    <img width={16.67} height={16.67} src={clock} />
                    <b>07.08.2020</b>
                </div>
            </div>

        </div>
    );
};

export default Blog;