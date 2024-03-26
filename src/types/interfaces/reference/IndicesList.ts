// For the individual Index data
export interface IndexData {
    symbol: string;
    name: string;
    country: string;
    currency: string;
    exchange: string;
    mic_code: string;
    access?: {
        global: string;
        plan: string;
    };
}

// For the HTTP route and API parameters
export interface IndicesListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    mic_code?: string; // Optional
    country?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
    include_delisted?: boolean; // Optional
}