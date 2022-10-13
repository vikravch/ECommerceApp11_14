import BlogPageRepository from "../../domain/BlogPageRepository";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";
import {articlesList} from "./articlesList";
import ArticleInfo from "../../domain/model/ArticleInfo";

export default class BlogPageFakeRepository implements BlogPageRepository {
    async getArticlesList(): Promise<Array<ArticleInfo>> {
        const response = await fetch(`${DOMAIN_NAME}all_articles_info_get`)
            .then((resp) => resp.body)
            .then((rb) => {
                const reader = rb?.getReader();

                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader?.read().then(({done, value}) => {

                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }

                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            });
                        }

                        push();
                    },
                });
            })
            .then((stream) =>
                new Response(stream, {headers: {'Content-Type': 'text/html'}}).text()
            )
            .then((result) => {
                console.log(result)
                const resArticleList = JSON.parse(result) as Array<ArticleInfo>;
                return Promise.resolve(resArticleList);
            });
    }
}
        //     if(response.ok){
        //         console.log(response)
        //         const json = await response.json();
        //         try{
        //             const resArticleList = JSON.parse(json) as Array<ArticleInfo>;
        //             return Promise.resolve(resArticleList);
        //         } catch(err){
        //             return Promise.reject(err);
        //         }
        //     } else {
        //         return Promise.reject(new Error("Response failed"));
        //     }
        // }

// const res = await fetch(`${DOMAIN_NAME}all_articles_info_get`);
// const res = JSON.parse(articlesList);
// return new Promise((resolve => {
//     resolve(res);
// }));
// return new Promise((resolve => {
//     resolve(response);
// }));
// }