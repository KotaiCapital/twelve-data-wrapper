import { StockRequestParameters, StockResponseMeta } from "../Utils";

export type OptionsExpirationRequest = StockRequestParameters

export interface OptionsExpirationResponse {
    meta: StockResponseMeta;
    dates: string[];
}
