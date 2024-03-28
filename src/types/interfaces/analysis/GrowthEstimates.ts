export interface GrowthEstimatesRequest {
    symbol: string;
    country?: string;
    exchange?: string;   
}

interface GrowthEstimates {
    current_quarter: number;
    next_quarter: number;
    current_year: number;
    next_year: number;
    next_5_years_pa: number;
    past_5_years_pa: number;
}

export interface GrowthEstimatesResponse {
    growth_estimates: GrowthEstimates;
    status: string;
}
