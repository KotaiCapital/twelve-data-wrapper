import { SecurityType } from "../SecurityType";

// For the individual Exchange data
export interface ExchangeData {
    name: string;
    code: string;
    country: string;
    timezone: string;
    access?: {
        global: string;
        plan: string;
    };
}

// For the HTTP route and API parameters
export interface ExchangesRequest {
    type: SecurityType;
    name?: string; // Optional
    code?: string; // Optional
    country?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
    show_plan?: boolean; // Optional
}