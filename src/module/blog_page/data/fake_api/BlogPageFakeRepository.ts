import BlogPageRepository from "../../domain/BlogPageRepository";
import ArticlesList from "../../domain/model/ArticlesList";
import ArticleInfo from "../../domain/model/ArticlesList";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";

// mirage.js
export default class BlogPageFakeRepository implements BlogPageRepository{
    async getArticlesList(): Promise<any> {
        // fetch ???
        //const res = await fetch(`${DOMAIN_NAME}all_articles_info_get`);

        const res = JSON.parse('[{"id":1196,"title":"BNYORIPONW","thumbImgUrl":"http://DUOCYTUSKR","timestampDateMod":5225985221736821174},{"id":1410,"title":"YX@YXICOTL","thumbImgUrl":"http://LWESKFFETA","timestampDateMod":752039541320270179},{"id":3947,"title":"GXBLNEBMOF","thumbImgUrl":"http://HRXTNMDNYI","timestampDateMod":484998835409921887},{"id":5068,"title":"PIOHWYYUFV","thumbImgUrl":"http://R@IOATIPPF","timestampDateMod":1935147327085379767},{"id":5946,"title":"@YWJHTESOA","thumbImgUrl":"http://OITUUOAW@K","timestampDateMod":1458210915589152579},{"id":6343,"title":"ACDPRMYENY","thumbImgUrl":"http://AFXWLIFKA@","timestampDateMod":6812835070577595291},{"id":7559,"title":"YXVCEMTCND","thumbImgUrl":"http://WTYBCUUTMQ","timestampDateMod":8674743937092263553},{"id":8426,"title":"DISOOUPOWQ","thumbImgUrl":"http://LMTFMBK@RQ","timestampDateMod":5767547762613429253},{"id":9119,"title":"JWJYQOEC@F","thumbImgUrl":"http://OJSPYAGSTQ","timestampDateMod":5197517167380274924},{"id":9634,"title":"XAGHWNQPEQ","thumbImgUrl":"http://UOYC@ACPCM","timestampDateMod":3686170786686026284}]') as Array<ArticleInfo>
        return new Promise((resolve => {
            resolve(res);
            //resolve([new ArticleInfo("77777",12,"","")]);
        }));
    }

}