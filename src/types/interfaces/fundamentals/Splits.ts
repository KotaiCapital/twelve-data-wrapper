import { StockResponseMeta } from "../Utils";

export interface SplitsRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    range?: string;
    start_date?: string;
    end_date?: string;
}

export interface SplitsResponse {
    meta: StockResponseMeta;
    splits: {
        date: string;
        description: string;
        ratio: number;
        from_factor: number;
        to_factor: number;
    }[];
}