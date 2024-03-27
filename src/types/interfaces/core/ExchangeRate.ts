// For the API parameters
export interface ExchangeRateRequest {
    symbol: string; // Required parameter, The currency pair (forex or cryptocurrency)
    date?: string; // Optional parameter, Specific date or time for the exchange rate
    format?: string; // Optional parameter, Value can be JSON or CSV
    delimiter?: string; // Optional parameter, Delimiter for CSV file
        // Required parameter, Your API key
    dp?: string; // Optional parameter, Number of decimal places for floating values
    timezone?: string; // Optional parameter, Timezone for output datetime
}

// For the API response
export interface ExchangeRateResponse {
    symbol: string; // Requested currency symbol
    rate: number; // Real-time exchange rate
    timestamp: number; // Unix timestamp of the rate
}