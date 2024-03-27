export interface EarningsCalendarRequest {
    exchange?: string;
    mic_code?: string;
    country?: string;
    format?: string;
    delimiter?: string;
    dp?: number;
    start_date?: string;
    end_date?: string;
}

export interface EarningsCalendarResponse {
    earnings: {
        [date: string]: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            country: string;
            time: string;
            eps_estimate: number;
            eps_actual: number;
            difference: number;
            surprise_prc: number;
        }[];
    };
    status: string;
}