import React, {useEffect, useRef, useState} from "react";
import Banner from "./Banner";
import Subscribtion from "./Subscribtion";
import Footer from "./Footer";
import Blog from "./Blog";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Spinner from "../../spinner/Spinner";
import {PaginationData} from "../../../general/dto/APIResponseTypes";
import {pageResponse} from "../../pagination/data/fakeData";

const LandingDetailPage: React.FC = () => {
    const newArrivalsRef = useRef<null | HTMLDivElement>(null);
    const currentPage = useSelector<Store, Number>(state => state.landingPage.pageData.number);
    const isLoadingProducts = useSelector<Store, boolean>(state => state.landingPage.isLoading);
    const pageData = useSelector<Store, PaginationData>(state => state.landingPage.pageData);
    const isLoadingBlog = useSelector<Store, boolean>(state => state.blogPage.isLoading);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(pageData === pageResponse) {
            setIsLoading(true);
        }
    }, []);

    useEffect(() => {
        if(!isLoadingProducts && !isLoadingBlog) {
            setIsLoading(false);
        }
    }, [isLoadingProducts, isLoadingBlog]);

    useEffect(() => {
        if (currentPage > 0 && newArrivalsRef.current) {
            newArrivalsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <>{isLoading ? <Spinner/> :
            <>
                <Banner/>
                <div ref={newArrivalsRef}>
                    <NewArrivals/>
                </div>
                <Categories/>
                <Blog/>
                <Subscribtion/>
                <Footer/>
            </>
        }</>)
}

export default LandingDetailPage;