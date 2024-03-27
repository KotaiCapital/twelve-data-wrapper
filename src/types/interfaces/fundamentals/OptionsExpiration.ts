export interface OptionsExpirationRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
}

export interface OptionsExpirationResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
    };
    dates: string[];
}
