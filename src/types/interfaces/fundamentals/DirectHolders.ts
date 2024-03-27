import { StockRequestParameters, StockResponseMeta, StockHolder } from "../Utils";

export type DirectHoldersRequest = StockRequestParameters;

export interface DirectHoldersResponse {
    meta: StockResponseMeta;
    fund_holders: StockHolder[];
}