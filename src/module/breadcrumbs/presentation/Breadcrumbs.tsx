import React from "react";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import style from "./Breadcrumbs.module.css";
import {categories} from "../../category/constants";
import {Crumb} from "./Crumb";
import {routes} from "../../../general/navigation/routes";

// todo what is this locationState?
export interface IBreadcrumbsLocationState {
    id?: string;
    path: string;
    title: string;
    url: string;
}


export const Breadcrumbs: React.FC = () => {

    const  state  = useLocation();
    console.log(state)

    return (
          <nav className={style.Breadcrumbs}>
              <Crumb path={`/${routes.landingDetail}`} title={"Main  /"} url={"/"}/>
              <Crumb path={`/${routes.men}`} title={"Men /"} url={"/men"}/>
              <Crumb path={`/${routes.men}`} title={"T-shirt /"} url={"/product123"}/>
          </nav>
      )
}