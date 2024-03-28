import { SecurityType } from "../SecurityType";

// For the HTTP route and API parameters
export interface StockListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    mic_code?: string; // Optional
    country?: string; // Optional
    type?: SecurityType; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
    include_delisted?: boolean; // Optional
}

// For the response keys description
interface StockData {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: SecurityType;
}

// For the individual stock data
interface StockDataWithPlan extends StockData {
    access?: {
        global: string;
        plan: string;
    };
}

type StockListResponseWithoutPlan = StockData[];

// For the response with &show_plan=true
interface StockListResponseWithPlan {
    data: StockDataWithPlan[];
    status: string;
}

export type StockListResponse = StockListResponseWithoutPlan | StockListResponseWithPlan;
