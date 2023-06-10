// state -- history state of app( array of breadcrumbs)

// url -- url of current breadcrumb (url of page in state, where we can jump from BrCrmbs)

import {IBreadcrumbsLocationState} from "./presentation/Breadcrumbs";
import {routes} from "../../general/navigation/routes";
import {categories} from "../category/constants";

export const removeRemainingCrumbs = ( state: IBreadcrumbsLocationState[],
                                       url: string
) : IBreadcrumbsLocationState[] => {
    return state
    // const index = state.findIndex(url); // url -- need to give name of category
    // return state.slice(0, index);
};