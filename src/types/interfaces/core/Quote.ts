export interface QuoteRequest {
    symbol: string;
    interval?: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    volume_time_period?: string;
    type?: string;
    format?: string;
    delimiter?: string;
    
    prepost?: boolean;
    eod?: boolean;
    rolling_period?: number;
    dp?: number;
    timezone?: string;
}

interface QuoteFiftyTwoWeekMetrics {
    low: string;
    high: string;
    low_change: string;
    high_change: string;
    low_change_percent: string;
    high_change_percent: string;
    range: string;
}

export interface QuoteResponse {
    symbol: string;
    name: string;
    exchange: string;
    mic_code: string;
    currency: string;
    datetime: string;
    timestamp: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    previous_close: string;
    change: string;
    percent_change: string;
    average_volume: string;
    rolling_1d_change: string;
    rolling_7d_change: string;
    rolling_period_change: string;
    is_market_open: boolean;
    fifty_two_week: QuoteFiftyTwoWeekMetrics;
    extended_change: string;
    extended_percent_change: string;
    extended_price: string;
    extended_timestamp: number;
}