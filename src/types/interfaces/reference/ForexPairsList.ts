import { TDDataResponse } from "../Utils";

// For the HTTP route and API parameters
export interface ForexPairsRequest {
    symbol?: string; // Optional
    currency_base?: string; // Optional
    currency_quote?: string; // Optional
    format?: 'JSON' | 'CSV'; // Optional
    delimiter?: string; // Optional
}

// For the individual forex pair data and response keys
export interface ForexPair {
    symbol: string;
    currency_group: "Major" | "Minor" | "Exotic" | "Exotic-Cross";
    currency_base: string;
    currency_quote: string;
}

export type ForexPairsResponse = TDDataResponse<ForexPair[]>;
