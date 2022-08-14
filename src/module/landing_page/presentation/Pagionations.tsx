import React from 'react';
 import style from "../styles/pagionations.module.css";
 import chevron_left from "../images/sumbol/chevron_left.png";
import chevron_right from "../images/sumbol/chevron_right.png";
const Pagionations = () => {
    return (
        <div className={style.pagionations}>
            <div className={style.prev}>
                <div className={style.chevron_left}>
                    <img src={chevron_left} className={style.chevron_left_vector}/>
                </div>
            </div>
           <div className={style.num_03}>
               <div className={style.number_1}>
                   <div className={style.text_1}>1</div>
               </div>
           </div>
            <div className={style.num_02}>
                <div className={style.number_2}>
                    <div className={style.text_2}>2</div>
                </div>
            </div>
            <div className={style.num_04}>
                <div className={style.number_4}>
                    <div className={style.text_4}>3</div>
                </div>
            </div>
            <div className={style.num_05}>
                <div className={style.number_5}>
                    <div className={style.text_5}>...</div>
                </div>
            </div>
            <div className={style.num_06}>
                <div className={style.number_6}>
                    <div className={style.text_6}>20</div>
                </div>
            </div>
            <div className={style.next}>
                <div className={style.chevron_right}>
                    <img src={chevron_right} className={style.chevron_right_vector}/>
                </div>
            </div>
        </div>
    );
};

export default Pagionations;