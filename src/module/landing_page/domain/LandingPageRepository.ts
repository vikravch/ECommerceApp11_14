
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";

export default interface LandingPageRepository{
    getNewArrivals: (pageNumber: number)=> Promise <ApiResponseProductPreview>;
}