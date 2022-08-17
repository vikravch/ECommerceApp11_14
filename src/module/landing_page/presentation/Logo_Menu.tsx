import style from "../styles/logo_menu.module.css"
import Menu from "./Menu";

const Logo_Menu = () =>
{
    return (
        <div className={style.logo_menu} >
        <div className={style.logo}>LOGO</div>
       <Menu/>
        </div>

    );
};

export default Logo_Menu;

