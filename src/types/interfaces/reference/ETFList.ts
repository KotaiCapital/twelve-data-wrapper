// For the individual ETF data and response keys
export interface ETFData {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    access?: {
        global: string;
        plan: string;
    };
}

// For the HTTP route and API parameters
export interface ETFListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    mic_code?: string; // Optional
    country?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
    include_delisted?: boolean; // Optional
}