import style from "../styles/menu.module.css"
const Menu = () =>
{
    return (
        <div className={style.menu} >
            <div className={style.men}>Men</div>
            <div className={style.women}>Women</div>
            <div className={style.kids}>Kids</div>
            <div className={style.sale}>Sale</div>
            <div className={style.collection}>Collections</div>
            <div className={style.blog}>Blog</div>
        </div>

    );
};

export default Menu;