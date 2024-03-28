export interface EPSTrendRequest {
    symbol: string;
    country?: string;
    exchange?: string;   
}

interface EPSTrend {
    date: string;
    period: string;
    current_estimate: number;
    "7_days_ago": number;
    "30_days_ago": number;
    "60_days_ago": number;
    "90_days_ago": number;
}

export interface EPSTrendResponse {
    eps_trend: EPSTrend[];
    status: string;
}