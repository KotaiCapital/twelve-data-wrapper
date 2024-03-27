export interface MarketMoversRequest {
    direction?: 'gainers' | 'losers';
    outputsize?: number;
    country?: string;
    dp?: number;
}

// Enum for different types of market movers
export enum MarketMoversType {
    Stocks = '/market_movers/stocks',
    ETF = '/market_movers/etf',
    MutualFunds = '/market_movers/mutual_funds',
    Forex = '/market_movers/forex',
    Crypto = '/market_movers/crypto',
}

export interface MarketMoversResponse {
    symbol: string;
    name: string;
    exchange: string;
    mic_code: string;
    datetime: string;
    last: string;
    high: string;
    low: string;
    volume: string;
    change: string;
    percent_change: string;
}