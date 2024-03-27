export interface EndOfDayPriceRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    type?: string;
    prepost?: boolean;
    dp?: number;
}

export interface EndOfDayPriceResponse {
    symbol: string;
    exchange: string;
    mic_code: string;
    currency: string;
    datetime: string;
    close: string;
}