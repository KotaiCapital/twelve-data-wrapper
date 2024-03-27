import { StockRequestParameters } from "../Utils";

export type ProfileRequest = StockRequestParameters;

export interface ProfileResponse {
    symbol: string;
    name: string;
    exchange: string;
    mic_code: string;
    sector: string;
    industry: string;
    employees: number;
    website: string;
    description: string;
    type: string;
    CEO: string;
    address: string;
    city: string;
    zip: string;
    state: string;
    country: string;
    phone: string;
}