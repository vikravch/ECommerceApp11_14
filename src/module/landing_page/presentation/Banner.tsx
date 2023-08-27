import style from "../styles/banner.module.css"

import left from "../images/sumbol/left.png"
import right from "../images/sumbol/right.png"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Banner = () => {
    const images = ['https://i.imgur.com/vycWUvh.png', 'https://i.imgur.com/xTrHyZw.png', 'https://i.imgur.com/tRTLcpn.png'];
    let [page, setPage] = useState(0);
    let [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage(page =>
                (page + 1) % images.length
            );
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function onClickHandler(e:any): void {
        if(e.target.src == left) {
            setPage(page-1 < 0 ? images.length-1 : page-1);
        } else if (e.target.src == right) {
            setPage(page+1 >= images.length ? 0 : page+1);
        }
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
    }

    return (
        <div className={style.rectangle + ' d-flex justify-content-center'}>
            <img src={left} className={style.icon_left} alt={'arrow left'}
                 onClick={(e) => onClickHandler(e)}/>
            <div className={style.banner_img}>
                <img src={images[page]} alt="banner" className={animate ? style.carouselImg : ''}/>
                <div className={style.btnGroup2 + ' d-flex flex-row mt-2'}>
                    <Link to={'/product/12'}>
                        <button className={'btn-lg btn-primary rounded-3 ms-5'}>Buy now</button>
                    </Link>
                    <Link to={'/catalog/collection'}>
                        <button className={'btn btn-lg bg-transparent text-light ms-5'}>{`Explore ➔`}</button>
                    </Link>
                </div>
            </div>
            <img src={right} className={style.icon_right} alt={'arrow right'}
                 onClick={(e) => onClickHandler(e)}/>
        </div>
    );
};

export default Banner;