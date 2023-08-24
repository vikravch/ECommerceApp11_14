import React, {useEffect, useRef} from "react";
import Banner from "./Banner";
import Subscribtion from "./Subscribtion";
import Footer from "./Footer";
import Blog from "./Blog";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";

const LandingDetailPage: React.FC = () => {
    const newArrivalsRef = useRef<null | HTMLDivElement>(null);
    const currentPage = useSelector<Store, Number>(state => state.landingPage.pageData.number);

    useEffect(() => {
        if (currentPage > 0 && newArrivalsRef.current) {
            newArrivalsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <>
            <Banner/>
            <div ref={newArrivalsRef} id={'newArrivals'}>
                <NewArrivals/>
            </div>
            <Categories/>
            <Blog/>
            <Subscribtion/>
            <Footer/>
        </>)
}

export default LandingDetailPage;
/*
            <Footer/>
 */