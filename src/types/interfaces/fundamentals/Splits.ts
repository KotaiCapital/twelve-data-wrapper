import { StockResponseMeta, StockRequestParametersDateIntervalWithRange } from "../Utils";

export type SplitsRequest = StockRequestParametersDateIntervalWithRange;

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