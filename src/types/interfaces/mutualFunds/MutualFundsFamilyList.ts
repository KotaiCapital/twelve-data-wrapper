export interface MutualFundsFamilyRequest {
    country?: string;
    fund_family?: string;    
}

export interface MutualFundsFamilyResponse {
    result: Record<string, string[]>;
    status: string;
}