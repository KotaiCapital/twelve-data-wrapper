import { StockResponseMeta } from "../Utils";

export interface DividendsRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    range?: string;
    start_date?: string;
    end_date?: string;    
}

export interface DividendsResponse {
    meta: StockResponseMeta;
    dividends: {
        ex_date: string;
        amount: number;
    }[];
}