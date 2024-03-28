// For the individual cryptocurrency pair data and response keys
interface CryptocurrencyPair {
    symbol: string;
    available_exchanges: string[];
    currency_base: string;
    currency_quote: string;
}

export type CryptocurrenciesListResponse = CryptocurrencyPair[];

// For the HTTP route and API parameters
export interface CryptocurrenciesListRequest {
    symbol?: string; // Optional
    exchange?: string; // Optional
    currency_base?: string; // Optional
    currency_quote?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
}