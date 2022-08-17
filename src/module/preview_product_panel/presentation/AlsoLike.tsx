import React from 'react';
import styles from "./AlsoLike.module.css";
import typography from "./styles/typography.module.css";
// import Pagionations from "./Pagionations";



// создать константу со ссылками на фото окторые прилетят массивом из БД
// замапить ее и послать на рендер в компонент
const productPreview = []
const AlsoLike = () => {

    // let productGalleryElements = productsPreview.map(element => <Footer productElement={element}/>
    return (<div className={styles.productPage}>
        <h4>You might also like</h4>
        <div className={styles.photoBox}>
            <div className={styles.productSmallCard}>
                <img src={require ("./images/Image44-4.jpg")} alt="t-shirt"/>
                <div className={styles.rateBox}>
                    <img src={require ("./images/Unionstar.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                </div>
                <div className={styles.productInfo}>
                    <div>#7142</div>
                    <div>Basic t-shirt</div>
                    <div className={styles.productPrice}>$35</div>
                    </div>
                </div>
            <div className={styles.productSmallCard}>
                <img src={require ("./images/Image44-1.jpg")} alt="t-shirt"/>
                <div className={styles.rateBox}>
                    <img src={require ("./images/Unionstar.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                </div>
                <div className={styles.productInfo}>
                    <div>#7142</div>
                    <div>Basic t-shirt</div>
                    <div className={styles.productPrice}>$35</div>
                </div>
            </div>
            <div className={styles.productSmallCard}>
                <img src={require ("./images/Image44-2.jpg")} alt="t-shirt"/>
                <div className={styles.rateBox}>
                    <img src={require ("./images/Unionstar.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                </div>
                <div className={styles.productInfo}>
                    <div>#7142</div>
                    <div>Basic t-shirt</div>
                    <div className={styles.productPrice}>$35</div>
                </div>
            </div>
            <div className={styles.productSmallCard}>
                <img src={require ("./images/Image44-3.jpg")} alt="t-shirt"/>
                <div className={styles.rateBox}>
                    <img src={require ("./images/Unionstar.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                    <img src={require ("./images/Unionstar-1.png")} alt="star"/>
                </div>
                <div className={styles.productInfo}>
                    <div>#7142</div>
                    <div>Basic t-shirt</div>
                    <div className={styles.productPrice}>$35</div>
                </div>
            </div>

        </div>
        {/*<div className={styles.pagionationsBox} > <Pagionations/> </div>*/}
    </div>)
};

export default AlsoLike;