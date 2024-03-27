import { StockRequestParameters } from "../Utils";

export type LogoRequest = StockRequestParameters;

export interface LogoResponse {
    meta: {
        symbol: string;
        name?: string;
        currency?: string;
        exchange?: string;
        mic_code?: string;
        exchange_timezone?: string;
    };
    url?: string;
    logo_base?: string;
    logo_quote?: string;
}