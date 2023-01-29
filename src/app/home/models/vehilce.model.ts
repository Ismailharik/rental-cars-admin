import { Category } from "./category.model";
import { Office } from "./office.model";

export interface Vehicle{
    id:number,
    title:string,
    description:string,
    dailyPrice:number,
    dateFirstCirculation:Date,
    nbrOfKm:number,
    franchise:number,
    model:number,
    available:boolean,
    urls:string[],
    officeId:number,
    category:Category
    office:Office
}