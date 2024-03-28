// For the HTTP route and API parameters
export interface CryptocurrencyExchangesRequest {
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
}

// For the individual Cryptocurrency Exchange data
interface CryptocurrencyExchangeData {
    name: string;
}

export type CryptocurrencyExchangesResponse =  CryptocurrencyExchangeData[];