import React from 'react';
import style from "../styles/navigation_menu.module.css"
import imgBag from "../images/sumbol/bag.png"
import imgUser from "../images/sumbol/user.png"
import lupa from "../images/sumbol/lupa.png"

const Navigation_Menu = () => {
    let profileBtn = sessionStorage.getItem("token") ? "/profile" : "/login";

    return (
        <nav className="navbar navbar-expand-lg  bg-dark p-20px">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <a className="navbar-brand text-light ">LOGO</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="catalog/men">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="catalog/women">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="catalog/kids">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="catalog/sale">Sale</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" href="catalog/collection">Collections</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>


                <div className="input-group  w-auto " >
                    <button type="button" className="input-group-text bg-transparent border-right-0 ">
                        <img src={lupa}/>
                    </button>
                    <input type="search" className="form-control bg-transparent border-left-0 border me-5"placeholder="Search" />
                </div>

                <div className="navbar-nav">
                    <a href="/cart" className="nav-item nav-link"><img src={imgBag}
                                                                   className={style.icon_shopping_bag}/></a>
                    <a href={profileBtn} className="nav-item nav-link "><img src={imgUser} className={style.icon_base_user}/></a>
                </div>
            </div>
            <div className={style.line}></div>

        </nav>

    );
};

export default Navigation_Menu;