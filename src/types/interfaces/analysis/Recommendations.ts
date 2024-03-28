export interface RecommendationsRequest {
    symbol: string;
    country?: string;
    exchange?: string;   
}

interface RecommendationTrends {
    current_month: Recommendation;
    previous_month: Recommendation;
    [key: string]: Recommendation;
}

interface Recommendation {
    strong_buy: number;
    buy: number;
    hold: number;
    sell: number;
    strong_sell: number;
}

export interface RecommendationsResponse {
    trends: RecommendationTrends;
    rating: number;
    status: string;
}
