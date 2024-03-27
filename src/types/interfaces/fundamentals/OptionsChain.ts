import { StockRequestParameters, StockResponseMeta } from "../Utils";

export interface OptionsChainRequest extends StockRequestParameters {
    expiration_date?: string;
    option_id?: string;
    side?: string;
}

export interface OptionsChainResponse {
    meta: StockResponseMeta;
    calls: OptionContract[];
    puts: OptionContract[];
}

interface OptionContract {
    contract_name: string;
    option_id: string;
    last_trade_date: string;
    strike: number;
    last_price: number;
    bid: number;
    ask: number;
    change: number;
    percent_change: number;
    volume: number;
    open_interest: number;
    implied_volatility: number;
    in_the_money: boolean;
}
