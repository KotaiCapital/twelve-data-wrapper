import { KVP } from '../Utils';

export interface IPOCalendarRequest {
    exchange?: string;
    mic_code?: string;
    country?: string;
    start_date?: string;
    end_date?: string;
}

export interface IPOCalendarResponseItem {
    symbol: string;
    name: string;
    exchange: string;
    mic_code: string;
    price_range_low: number | null;
    price_range_high: number  | null;
    offer_price: number | null;
    currency: string;
    shares: number | null;
}

export type IPOCalendarResponse = KVP<IPOCalendarResponseItem>;