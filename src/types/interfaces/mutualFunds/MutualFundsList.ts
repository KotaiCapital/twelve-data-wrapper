export interface MutualFundsListRequest {
    symbol?: string;
    country?: string;
    fund_family?: string;
    fund_type?: string;
    performance_rating?: number;
    risk_rating?: number;
    page?: number;
    outputsize?: number;    
}

export interface MutualFundsListResponse {
    count: number;
    list: {
        symbol: string;
        name: string;
        country: string;
        fund_family: string;
        fund_type: string;
        performance_rating: number;
        risk_rating: number;
    }[];
    status: string;
}