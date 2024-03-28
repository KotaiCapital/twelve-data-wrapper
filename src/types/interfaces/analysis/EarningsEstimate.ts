export interface EarningsEstimateRequest {
    symbol: string;
    exchange?: string;
    country?: string;
};

interface EarningsEstimate {
    date: string;
    period: string;
    number_of_analysts: number;
    avg_estimate: number;
    low_estimate: number;
    high_estimate: number;
    year_ago_eps: number;
}

export interface EarningsEstimateResponse {
    earnings_estimate: EarningsEstimate[];
    status: string;
}