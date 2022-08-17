import React from 'react';
import style from "../styles/navigation_menu.module.css"
import Logo_Menu from "./Logo_Menu";
import imgBag from "../images/sumbol/bag.png"
import imgUser from "../images/sumbol/user.png"
import lupa from "../images/sumbol/lupa.png"
const Navigation_Menu = () => {
    return (
        <div className={style.navigation_menu}>
            <div className={style.base_bottom}>
                <Logo_Menu/>
                <div className={style.input}>
                    <label className={style.text_states_search}>
                        <div className={style.icon_base_search}>
                            <input type={"image"} src={lupa} className={style.icon_vector}/>
                        </div>
                        <div className={style.text_input}>
                            <h3 className={style.text_placeholder}>Search</h3>
                        </div>
                    </label>
                </div>
                <img src={imgBag} className={style.icon_shopping_bag}/>
                <img src={imgUser} className={style.icon_base_user}/>
                <div className={style.line}></div>
        </div>
            </div>

    );
};

export default Navigation_Menu;