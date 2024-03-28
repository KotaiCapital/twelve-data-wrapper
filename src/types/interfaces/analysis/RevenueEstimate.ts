export interface RevenueEstimateRequest {
    symbol: string;
    country?: string;
    exchange?: string;
    dp?: number;
}

interface RevenueEstimate {
    date: string;
    period: string;
    number_of_analysts: number;
    avg_estimate: number;
    low_estimate: number;
    high_estimate: number;
    year_ago_sales: number | null;
    sales_growth: number | null;
}

export interface RevenueEstimateResponse {
    revenue_estimate: RevenueEstimate[];
    status: string;
}
