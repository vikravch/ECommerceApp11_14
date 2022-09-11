import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "../domain/model/Article";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {getArticleDetailsAction} from "../redux/asyncActions";
import style from './BlogArticlePage.module.css'


const BlogArticlePage:React.FC = ()=> {
    const {id} = useParams<string>()
    const article = useSelector<Store, Article>(
        state => state.articlePage.article
    );
    const isLoading = useSelector<Store,boolean>(
        state => state.articlePage.isLoading
    );
    const dispatch = useDispatch()
    useEffect(()=>{
        if(id){
            dispatch(getArticleDetailsAction(id))
        }
    },[id]);

    return (<div className={style.wrapper}>
        <h1>{article.title}</h1>
        <div>{article.timestampDateMod}</div>
        <p className={style.paragraph}>Reach your fitness goals with the Nike Training Club App (NTC). With access to 200+ free workouts and targeted training programmes, the NTC App will support you every step of the way. From invigorating yoga classes to bodyweight sessions with and without equipment, you'll find the right workout for you. Follow our Nike Master Trainers through varied classes, ranging from 5–50 minutes.
            Do them at home, in the gym, or outdoors – whenever and wherever you want. Plus, our free video library is constantly growing, so expect new videos to flow in.
            No matter what fitness level you're at, NTC will give you the tools you need to succeed.</p>
        <h2>Workout From Home Routines</h2>
        <p className={style.paragraph}>We're taking home workouts to the next level. With NTC, you can move, sweat and get stronger right from your living room. Go all in by working out with NTC Live, exploring our library of free workouts and accessing expert advice. Plus, you'll be joining a whole community of other home athletes.</p>
        <img src={'#'} className={style.img1}></img>
        <p className={style.paragraph}>If the gym is where you like to sweat, you need an app that keeps you feeling challenged. With access to training plans and expert help, you can work on your fitness and strength knowing you're in good hands. NTC features hours of workouts, from cardio to targeted strength training – with the possibility to leverage full gym equipment when it's available to you. It's not just a tracker, it's your new favourite coach.</p>
        <h2>Flexible Training Programmes Tailored to You</h2>
        <p className={style.paragraph}>Start training with a personal plan that guides you while adjusting to your progress, schedule and other activities. With NTC, you get access to 4–6-week training plans. Whether you use a full gym or are training from the comfort of your home, there's a routine that'll fit you and your schedule so that you can reach your goals.
            Our multi-week programmes don't just guide you through regular workouts, they include advice on wellness and nutrition too.* No matter what kind of athlete you are, you'll get everything you need to improve your fitness and stay on track. Each programme has been designed for specific results, so if you're hoping to build strength, get leaner or gain more power, you'll know what to expect. Work out with NTC at home or use it as a weight training app in the gym to help you make the most of your equipment.</p>
        <div className={style.img_block2}>
            <img src={"#"} className={style.img2}></img>
            <img src={"#"} className={style.img2}></img>
        </div>
        <div className={style.horizontal_line}></div>
        <div className={style.articles_downblock}>
            <div className={style.article_item}>
                <div className={style.article_item_img_div}>
                    <img src={"#"} className={style.article_item_img}></img>
                </div>
                <div>
                    <h3>For Wherever and Whenever You Want To Train</h3>
                </div>
                <div>
                    07.08.2020
                </div>
            </div>

            <div className={style.article_item}>
                <div className={style.article_item_img_div}>
                    <img src={"#"} className={style.article_item_img}></img>
                </div>
                <div>
                    <h3>Workout From Home Routines: Tips and Best Practices</h3>
                </div>
                <div>
                    07.08.2020
                </div>
            </div>
        </div>
        <div className={style.subscribe_block}>
            <div className={style.subscribe_block_left}></div>
            <div className={style.subscribe_block_right}></div>
        </div>
    </div>);
}
export default BlogArticlePage;