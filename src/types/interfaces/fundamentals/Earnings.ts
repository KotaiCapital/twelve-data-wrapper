import { StockResponseMeta } from "../Utils";

export interface EarningsRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    type?: string;
    period?: string;
    outputsize?: number;
    format?: string;
    delimiter?: string;
    dp?: number;
    start_date?: string;
    end_date?: string;
}

export interface EarningsResponse {
    meta: StockResponseMeta;
    earnings: {
        date: string;
        time: string;
        eps_estimate: number;
        eps_actual: number;
        difference: number;
        surprise_prc: number;
    }[];
    status: string;
}