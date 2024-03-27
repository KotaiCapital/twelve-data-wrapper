import { StockRequestParameters, StockResponseMeta } from "../Utils";

export type KeyExecutivesRequest = StockRequestParameters;

export interface KeyExecutivesResponse {
    meta: StockResponseMeta;
    key_executives: KeyExecutive[];
}

interface KeyExecutive {
    name: string;
    title: string;
    age: number;
    year_born: number;
    pay: number;
}
