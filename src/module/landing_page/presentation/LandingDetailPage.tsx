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
            <h1>Categories</h1>
            <Categories/>
            <h1>Blog</h1>
            <Blog/>
            <Subscribtion/>
            <Footer/>
        </>)
}

export default LandingDetailPage;