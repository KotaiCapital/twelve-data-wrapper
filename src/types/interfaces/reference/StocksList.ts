// For the individual stock data
export interface StockData {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
    access?: {
        global: string;
        plan: string;
    };
}

// For the response with &show_plan=true
export interface StockListResponseWithPlan {
    data: StockData[];
    status: string;
}

// For the HTTP route and API parameters
export interface StockListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    mic_code?: string; // Optional
    country?: string; // Optional
    type?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
    include_delisted?: boolean; // Optional
}

// For the response keys description
export interface StockListResponseKeys {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
}