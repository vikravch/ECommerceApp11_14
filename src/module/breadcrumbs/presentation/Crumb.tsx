import React from "react";
import { useLocation, useNavigate, useMatch} from "react-router-dom";
import {IBreadcrumbsLocationState} from "./Breadcrumbs";
import style from "./Crumb.module.css";

export interface ICrumbProps {
    className?: string;
    path: string;
    title: string;
    url: string;
}

export const Crumb:React.FC<ICrumbProps> = ({className, path, title, url}) =>
{
const history = useNavigate();
    // @ts-ignore
    const { state } = useLocation<IBreadcrumbsLocationState[]>();
const match = useMatch(path);
if (match?.pathname) {
    console.log(match?.pathname)
}
//
// const routeTo = event => {
//     event.preventDefault();
//     history({pathname: url,
//     state: removeRemainingCrumbs(state, url)})
// }

const renderTitle = () => {
    return title;
}

//todo styles for first and last breadcrumb,
// first without margin left, last - bold black

    return(
    <>
        <div className={style.Crumb}>{title}</div>
       {/*<div onClick={routeTo}>renderTitle();</div>*/}
       {/* <div>/</div> // dewider between crumbs*/}
    </>
);
}