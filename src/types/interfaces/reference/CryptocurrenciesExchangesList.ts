// For the individual Cryptocurrency Exchange data
export interface CryptocurrencyExchangeData {
    name: string;
}

// For the HTTP route and API parameters
export interface CryptocurrencyExchangesRequest {
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
}