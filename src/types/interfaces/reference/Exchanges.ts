import { SecurityType } from "../SecurityType";

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

// For the individual Exchange data
interface ExchangeData {
    name: string;
    code: string;
    country: string;
    timezone: string;
}

interface ExchangeDataWithPlan extends ExchangeData {
    access?: {
        global: string;
        plan: string;
    };
};

type ExchangesResponseWithoutPlan = ExchangeData[];

// For the response with &show_plan=true
interface ExchangesResponseWithPlan {
    data: ExchangeDataWithPlan[];
    status: string;
}

export type ExchangesResponse = ExchangesResponseWithoutPlan | ExchangesResponseWithPlan;
