import { SecurityType } from "../SecurityType";

export interface BondsListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    country?: string; // Optional
    type?: SecurityType; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
    include_delisted?: boolean; // Optional
    page?: number; // Optional
    outputsize?: number; // Optional
}

export interface BondsListResponseItem {
    symbol: string;
    name: string;
    country: string;
    currency: string;
    exchange: string;
    type: SecurityType;
    access?: {
        global: string;
        plan: string;
    };
}

export interface BondsListResponse {
    result: {
        count: number;
        list: BondsListResponseItem[];
    };
    status: string;
}