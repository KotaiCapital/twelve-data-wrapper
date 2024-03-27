export interface KeyExecutivesRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    
}

export interface KeyExecutivesResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
    };
    key_executives: KeyExecutive[];
}

interface KeyExecutive {
    name: string;
    title: string;
    age: number;
    year_born: number;
    pay: number;
}
