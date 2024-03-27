import { StockResponseMeta, StockRequestParametersDateInterval, StockReportingPeriod } from "../Utils";

export interface CashFlowRequest extends StockRequestParametersDateInterval {
    period: StockReportingPeriod
};

export interface CashFlowResponse {
    meta: StockResponseMeta & {
        period: string;
    };
    cash_flow: {
        fiscal_date: string;
        quarter: number;
        operating_activities: {
            net_income: number;
            depreciation: number;
            deferred_taxes: number;
            stock_based_compensation: number;
            other_non_cash_items: number;
            accounts_receivable: number;
            accounts_payable: number;
            other_assets_liabilities: number;
            operating_cash_flow: number;
        };
        investing_activities: {
            capital_expenditures: number;
            net_intangibles: number | null;
            net_acquisitions: number | null;
            purchase_of_investments: number;
            sale_of_investments: number;
            other_investing_activity: number;
            investing_cash_flow: number;
        };
        financing_activities: {
            long_term_debt_issuance: number | null;
            long_term_debt_payments: number;
            short_term_debt_issuance: number;
            common_stock_issuance: number | null;
            common_stock_repurchase: number;
            common_dividends: number;
            other_financing_charges: number;
            financing_cash_flow: number;
        };
        end_cash_position: number;
        income_tax_paid: number;
        interest_paid: number;
        free_cash_flow: number;
    }[];
}