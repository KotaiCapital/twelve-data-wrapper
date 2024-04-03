import { TDDataResponse } from "../Utils";

// For the HTTP route and API parameters
export interface CryptocurrencyExchangesRequest {
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
}

// For the individual Cryptocurrency Exchange data
export interface CryptocurrencyExchangeData {
    name: string;
}

export type CryptocurrencyExchangesResponse = TDDataResponse<CryptocurrencyExchangeData[]>;