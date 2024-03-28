import { AnalystRatingChangeType } from '../Utils';

export interface AnalystRatingsUSEquitiesRequest {
    symbol: string;
    exchange?: string;
    rating_change?: AnalystRatingChangeType;
    outputsize?: number;
}

interface AnalystRatingUSEquities {
    date: string;
    firm: string;
    analyst_name: string;
    rating_change: AnalystRatingChangeType;
    rating_current: string;
    rating_prior: string;
    time: string;
    action_price_target: string;
    price_target_current: number;
    price_target_prior: number | null;
}

export interface AnalystRatingsUSEquitiesResponse {
    ratings: AnalystRatingUSEquities[];
    status: string;
}