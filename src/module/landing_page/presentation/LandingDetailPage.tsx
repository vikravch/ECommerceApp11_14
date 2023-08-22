import React from "react";
import Banner from "./Banner";
import Subscribtion from "./Subscribtion";
import Footer from "./Footer";
import Blog from "./Blog";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";

const LandingDetailPage: React.FC = () => {
    return (
        <>
            <Banner/>
            <NewArrivals/>
            <Categories/>
            <Blog/>
            <Subscribtion/>
            <Footer/>
        </>)
}

export default LandingDetailPage;
/*
            <Banner/>

            <Categories/>


            <Footer/>


            <Blog/>
            <Subscribtion/>
 */

/*
order:
            <Banner/>
            <NewArrivals/>
            <Categories/>
            <Blog/>
            <Subscribtion/>
            <Footer/>
 */