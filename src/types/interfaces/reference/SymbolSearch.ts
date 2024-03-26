// For individual search result
export interface SymbolSearchResult {
    symbol: string;
    instrument_name: string;
    exchange: string;
    mic_code: string;
    exchange_timezone: string;
    instrument_type: string;
    country: string;
    currency: string;
    access?: {
        global: string;
        plan: string;
    };
}

// For the HTTP route and API parameters
export interface SymbolSearchRequest {
    symbol: string; // Required parameter
    outputsize?: number; // Optional, default 30, max 120
    show_plan?: boolean; // Optional, default false
}

// The main interface for the API response
export interface SymbolSearchResponse {
    data: SymbolSearchResult[];
    status: string;
}