import { StockRequestParameters } from "../Utils";

export type LastChangesRequestEndpoint = 'price_target' | 'recommendations' | 'statistics' |
    'insider_transactions' | 'profile' | 'mutual_funds_world_summary' | 'mutual_funds_world' |
    'institutional_holders' | 'analyst_rating' | 'income_statement' | 'cash_flow' | 
    'balance_sheet' | 'mutual_funds_list' | 'mutual_funds_world_sustainability' |
    'mutual_funds_world_summary' | 'mutual_funds_world_risk'|
    'mutual_funds_world_purchase_info' | 'mutual_funds_world_composition' |
    'mutual_funds_world_performance' | 'mutual_funds_world';

export interface LastChangesRequest extends StockRequestParameters {
    endpoint: LastChangesRequestEndpoint;
    start_date?: string;
    page?: number;
    outputsize?: number;
}

export interface LastChangesResponseItem {
    symbol: string;
    mic_code: string;
    last_change: string;
}

export type LastChangesResponse = LastChangesResponseItem[];