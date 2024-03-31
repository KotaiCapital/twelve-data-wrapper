import { TDDataResponse } from "../Utils";

// For the HTTP route and API parameters
export interface SymbolSearchRequest {
    symbol: string; // Required parameter
    outputsize?: number; // Optional, default 30, max 120
    show_plan?: boolean; // Optional, default false
}

// For individual search result
interface SymbolSearchResult {
    symbol: string;
    instrument_name: string;
    exchange: string;
    mic_code: string;
    exchange_timezone: string;
    instrument_type: string;
    country: string;
    currency: string;
}

interface SymbolSearchResultWithPlan extends SymbolSearchResult {
    access?: {
        global: string;
        plan: string;
    };
}

type SymbolSearchResponseWithoutPlan = TDDataResponse<SymbolSearchResult[]>;

// For the response with &show_plan=true
type SymbolSearchResponseWithPlan = TDDataResponse<SymbolSearchResultWithPlan[]>;

export type SymbolSearchResponse = SymbolSearchResponseWithoutPlan | SymbolSearchResponseWithPlan;
