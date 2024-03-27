export interface KVP<T> {
    [k: string]: T;
}

export type KVPString = KVP<string>;

export interface StockRequestParameters {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
}

export interface StockRequestParametersDateInterval extends StockRequestParameters {
    start_date?: string;
    end_date?: string;
}

export interface StockRequestParametersDateIntervalWithRange extends StockRequestParametersDateInterval {
    range?: 'last'|'1m'|'3m'|'6m'|'ytd'|'1y'|'2y'|'5y'|'full';
}

export type StockReportingPeriod = 'annual' | 'quarterly';

export interface StockResponseMeta {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    exchange_timezone: string;
}

export interface StockHolder {
    entity_name: string;
    date_reported: string;
    shares: number;
    value: number;
    percent_held: number;
}
