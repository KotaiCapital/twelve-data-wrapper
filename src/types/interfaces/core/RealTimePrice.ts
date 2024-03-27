export interface RealTimePriceRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    type?: string;
    format?: string;
    delimiter?: string;
    prepost?: boolean;
    dp?: number;
}

export interface RealTimePriceResponse {
    price: string;
}