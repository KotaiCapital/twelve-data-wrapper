import { AnalystRatingChangeType } from '../Utils';

export interface AnalystRatingsLightRequest {
    symbol: string;
    country?: string;
    exchange?: string;
    rating_change?: AnalystRatingChangeType;
    outputsize?: number;   
}

interface AnalystRatingLight {
    date: string;
    firm: string;
    rating_change: AnalystRatingChangeType;
    rating_current: string;
    rating_prior: string;
}

export interface AnalystRatingsLightResponse {
    ratings: AnalystRatingLight[];
    status: string;
}
