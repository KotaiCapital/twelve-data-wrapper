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


// For the individual ETF data and response keys
export interface ETFData {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
}

export interface ETFDataWithPlan extends ETFData {
    access?: {
        global: string;
        plan: string;
    };
}

type ETFDataResponseWithoutPlan = ETFData[];

interface ETFDataResponseWithPlan {
    data: ETFDataWithPlan[];
    status: string;
}

export type ETFListResponse = ETFDataResponseWithoutPlan | ETFDataResponseWithPlan;
