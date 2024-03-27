import { StockRequestParameters, StockResponseMeta } from "../Utils";

export type InsiderTransactionsRequest = StockRequestParameters;

export interface InsiderTransactionsResponse {
    meta: StockResponseMeta;
    insider_transactions: {
        full_name: string;
        position: string;
        date_reported: string;
        is_direct: boolean;
        shares: number;
        value: number;
        description: string;
    }[];
}