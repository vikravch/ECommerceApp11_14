import BlogPageRepository from "../domain/BlogPageRepository";
import api_client from "../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../redux/asyncActions";
import {ApiResponseBlogHeader, ApiResponseBlogPreview} from "../../../general/dto/APIResponseTypes";
import convertDate, {convertBlogArticleTitle} from "../../../general/common/tools";
import Product from "../../product_page/domain/model/Product";
import {setProductDataAction} from "../../product_page/redux/asyncActions";
import {fakeProductData} from "../../product_page/data/tempData";
import {blogItemsFake, headersFake} from "../presentation/fake_data/blogFakeData";

export default class BlogRepositoryImpl implements BlogPageRepository{

    async getArticlesList(pageNumber: number): Promise<ApiResponseBlogPreview> {
        try {
            const res = await api_client.get<ApiResponseBlogPreview>(`/blog?page=${pageNumber}&size=6`)
            res.data.content.forEach(a => {
                a.title = convertBlogArticleTitle(a.title);
                a.timestampDateMod = convertDate(a.timestampDateMod);
            });
            setArticlesListDataAction(res.data)
            return res.data
        }
            catch(error: any) {
                console.log("ERROR: ")
                console.log(error.message)
                //setLoading(false);
               // throw error;
                return new Promise<ApiResponseBlogPreview>((resolve) => {
                    console.log("fake headers");
                    blogItemsFake.content.forEach(a => {
                        a.title = convertBlogArticleTitle(a.title);
                       // a.timestampDateMod = convertDate(a.timestampDateMod);
                    });
                    setArticlesListDataAction(blogItemsFake);
                    resolve(blogItemsFake);
                })
            }
    }

    async getHeadersList(): Promise<Array<ApiResponseBlogHeader>> {
        try {
            const res = await api_client.get<Array<ApiResponseBlogHeader>>('/blog/header');
            res.data.forEach(h => {
                h.title = convertBlogArticleTitle(h.title);
                h.timestampDateMod = convertDate(h.timestampDateMod);
            });
            setHeadersListDataAction(res.data);
            return res.data;
        } catch(error: any) {
            console.log("ERROR: ")
            console.log(error.message)
            //setLoading(false);
             //throw error;
            return new Promise<Array<ApiResponseBlogHeader>>((resolve) => {
                console.log("fake headers");
                headersFake.forEach(h => {
                    h.title = convertBlogArticleTitle(h.title);
                   // h.timestampDateMod = convertDate(h.timestampDateMod);
                });
                setHeadersListDataAction(headersFake);
                resolve(headersFake);
            })
        }
    }

}
