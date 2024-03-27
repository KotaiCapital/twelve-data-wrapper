export interface OptionsChainRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    expiration_date?: string;
    option_id?: string;
    side?: string;
    
}

export interface OptionsChainResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
    };
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
