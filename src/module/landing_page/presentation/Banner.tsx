import style from "../styles/banner.module.css"
import Navigation_Menu from "./Navigation_Menu";
import arrow_right from "../images/sumbol/arrow-right.png"
import left from "../images/sumbol/left.png"
import right from "../images/sumbol/right.png"

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.rectangle}>
                <Navigation_Menu/>
                <div className={style.air}>AIR Beyond Compare</div>
                <div className={style.explore_best_air}>Explore the best Air Max for fall & beyond</div>
                <div className={style.nike}>NIKE</div>
                <div className={style.grad}>
                    <div className={style.grad_vector1}>
                        <div className={style.grad_vector2}>
                            <img className={style.img_nike}/>
                        </div>
                    </div>
                </div>
                <div className={style.group2}>
                    <div className={style.text_explore}>Explore</div>
                    <div className={style.arrow_right}>
                        <img src={arrow_right} className={style.arrow_vector}/>
                    </div>
                </div>
                <button className={style.btn}>
                    <div className={style.btn_text_states}>
                        <h3 className={style.btn_text}>Buy now</h3>
                    </div>
                </button>
                <div className={style.icon_left}>
                    <img src={left} className={style.icon_left_vector}/>
                </div>
                <div className={style.icon_right}>
                    <img src={right} className={style.icon_right_vector}/>
                </div>
            </div>
        </div>


    );
};

export default Banner;