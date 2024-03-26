// For the API parameters
export interface EarliestTimestampRequest {
    symbol: string; // Required parameter
    interval: string; // Required parameter, supports various time intervals like 1min, 5min, etc.
    exchange?: string; // Optional parameter
    mic_code?: string; // Optional parameter
        // Required parameter
}

// The main interface for the API response
export interface EarliestTimestampResponse {
    datetime: string; // Earliest datetime, format depends on interval
    unix_time: number; // Datetime converted to UNIX timestamp
}