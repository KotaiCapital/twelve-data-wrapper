export interface IncomeStatementRequest {
    symbol: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    period?: string;
    start_date?: string;
    end_date?: string;
    
}

export interface IncomeStatementResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
        period: string;
    };
    income_statement: {
        fiscal_date: string;
        quarter: string;
        sales: number;
        cost_of_goods: number;
        gross_profit: number;
        operating_expense: {
            research_and_development: number;
            selling_general_and_administrative: number;
            other_operating_expenses: number | null;
        };
        operating_income: number;
        non_operating_interest: {
            income: number;
            expense: number;
        };
        other_income_expense: number;
        pretax_income: number;
        income_tax: number;
        net_income: number;
        eps_basic: number;
        eps_diluted: number;
        basic_shares_outstanding: number;
        diluted_shares_outstanding: number;
        ebitda: number;
        net_income_continuous_operations: number | null;
        minority_interests: number | null;
        preferred_stock_dividends: number | null;
    }[];
}