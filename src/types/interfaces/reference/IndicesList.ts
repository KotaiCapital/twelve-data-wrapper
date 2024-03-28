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

// For the individual Index data
interface IndexData {
    symbol: string;
    name: string;
    country: string;
    currency: string;
    exchange: string;
    mic_code: string;
}

interface IndexDataWithPlan extends IndexData {
    access?: {
        global: string;
        plan: string;
    };
}

type IndicesListResponseWithoutPlan = IndexData[];

// For the response with &show_plan=true
interface IndicesListResponseWithPlan {
    data: IndexDataWithPlan[];
    status: string;
}

export type IndicesListResponse = IndicesListResponseWithoutPlan | IndicesListResponseWithPlan;

