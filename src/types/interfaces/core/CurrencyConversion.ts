export interface CurrencyConversionRequest {
    symbol: string;
    amount: number;
    date?: string;
    format?: string;
    delimiter?: string;
    dp?: number;
    timezone?: string;
}

export interface CurrencyConversionResponse {
    symbol: string;
    rate: number;
    amount: number;
    timestamp: number;
}