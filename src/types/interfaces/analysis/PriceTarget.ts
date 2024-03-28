export interface PriceTargetRequest {
    symbol: string;
    country?: string;
    exchange?: string;   
}

interface PriceTarget {
    high: number;
    median: number;
    low: number;
    average: number;
    current: number;
}

export interface PriceTargetResponse {
    price_target: PriceTarget;
    status: string;
}
