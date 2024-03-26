// For the API parameters
export interface MarketStateRequest {
    exchange?: string; // Optional parameter, takes exchange name or alpha code
    code?: string; // Optional parameter, takes MIC code of exchange
    country?: string; // Optional parameter, takes country name or alpha code
        // Required parameter
}

// The main interface for the API response
export interface MarketStateResponse {
    name: string; // The full name of the exchange
    code: string; // Market Identifier Codes (MIC) under ISO 10383 standard
    country: string; // Country where the exchange is located
    is_market_open: boolean; // True if the market is open, false if closed
    time_after_open: string; // Time after market opening in HH:MM:SS format; if currently closed - returns 00:00:00
    time_to_open: string; // Time to market opening in HH:MM:SS format; if currently open - returns 00:00:00
    time_to_close: string; // Time to market closing in HH:MM:SS format; if currently closed - returns 00:00:00
}

// The API response could be an array of MarketStateResponse
export type MarketStateListResponse = MarketStateResponse[];