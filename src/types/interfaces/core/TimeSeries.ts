// For the API parameters
export interface TimeSeriesRequest {
    symbol: string; // Required parameter, Symbol ticker of the instrument
    interval: string; // Required parameter, Interval between two consecutive points in time series
    exchange?: string; // Optional parameter, Exchange where instrument is traded
    mic_code?: string; // Optional parameter, Market Identifier Code (MIC) under ISO 10383 standard
    country?: string; // Optional parameter, Country where instrument is traded
    type?: string; // Optional parameter, The asset class to which the instrument belongs
    outputsize?: number; // Optional parameter, Number of data points to retrieve
    format?: string; // Optional parameter, Value can be JSON or CSV
    delimiter?: string; // Optional parameter, Specify the delimiter used when downloading the CSV file
        // Required parameter, Your API key
    prepost?: string; // Optional parameter, Only for Pro and above plans
    // ... other advanced parameters
}

// For the meta object in the API response
export interface TimeSeriesMeta {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
}

// For the values array in the API response
export interface TimeSeriesValue {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}

// The main interface for the API response
export interface TimeSeriesResponse {
    meta: TimeSeriesMeta;
    values: TimeSeriesValue[];
    status: string;
}