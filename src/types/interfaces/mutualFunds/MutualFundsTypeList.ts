export interface MutualFundsTypeRequest {
    country?: string;
    fund_type?: string;
    
}

export interface MutualFundsTypeResponse {
    result: Record<string, string[]>;
    status: string;
}