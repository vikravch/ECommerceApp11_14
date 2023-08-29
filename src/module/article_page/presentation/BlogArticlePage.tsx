import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "../domain/model/Article";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {getArticleDetailsAction} from "../redux/asyncActions";
import style from './BlogArticlePage.module.css'
import Subscribtion from "../../landing_page/presentation/Subscribtion";
import Blog from "../../landing_page/presentation/Blog";
import convertDate from "../../../general/common/tools";
import Spinner from "../../spinner/Spinner";


const BlogArticlePage:React.FC = ()=> {
    const {articleId} = useParams<string>();
    const article = useSelector<Store, Article>(state => state.articlePage.article);
    const isLoading = useSelector<Store, boolean>(state => state.articlePage.isLoading);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(articleId){
            dispatch(getArticleDetailsAction(articleId))
        }
    },[]);

    return (
        <>
        {isLoading ? <Spinner/> :
            <>
                <div className={style.mainDiv + ' container'}>
                    <p className={style.main}>Main / Blog / <span className={'black'}>{article.title}</span></p>
                    <div className={'text-center'}>
                        <h1 className={style.title}>{article.title}</h1>
                        <div className={style.time_stamp}>&#x1F552; {convertDate(article.timestampDateMod)}</div>
                    </div>
                    <div className={style.body} dangerouslySetInnerHTML={{__html: article.body}}/>
                    <div className={style.br}/>
                </div>
                <Blog/>
                <Subscribtion/>
            </>}
        </>
    );
}
export default BlogArticlePage;