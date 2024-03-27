import { StockRequestParameters, StockResponseMeta, StockHolder } from "../Utils";

export type FundHoldersRequest = StockRequestParameters;

export interface FundHoldersResponse {
    meta: StockResponseMeta;
    fund_holders: StockHolder[];
}