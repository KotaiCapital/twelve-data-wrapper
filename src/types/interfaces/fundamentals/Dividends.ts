import { StockResponseMeta, StockRequestParametersDateIntervalWithRange } from "../Utils";

export type DividendsRequest = StockRequestParametersDateIntervalWithRange;

export interface DividendsResponse {
    meta: StockResponseMeta;
    dividends: {
        ex_date: string;
        amount: number;
    }[];
}