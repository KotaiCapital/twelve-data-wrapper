import { StockRequestParameters, StockResponseMeta, StockHolder } from "../Utils";

export type InstitutionalHoldersRequest = StockRequestParameters;

export interface InstitutionalHoldersResponse {
    meta: StockResponseMeta;
    holders: StockHolder[];
}