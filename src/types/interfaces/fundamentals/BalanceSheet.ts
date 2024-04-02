import { StockResponseMeta, StockRequestParametersDateInterval, StockReportingPeriod } from "../Utils";

export interface BalanceSheetRequest extends StockRequestParametersDateInterval {
    period?: StockReportingPeriod;
};

export interface BalanceSheetResponse {
    meta: StockResponseMeta & {
        period: string;
    };
    balance_sheet: {
        fiscal_date: string;
        assets: {
            current_assets: {
                cash: number;
                cash_equivalents: number;
                cash_and_cash_equivalents: number;
                other_short_term_investments: number;
                accounts_receivable: number;
                other_receivables: number;
                inventory: number;
                prepaid_assets: number | null;
                restricted_cash: number | null;
                assets_held_for_sale: number | null;
                hedging_assets: number | null;
                other_current_assets: number;
                total_current_assets: number;
            };
            non_current_assets: {
                properties: number;
                land_and_improvements: number;
                machinery_furniture_equipment: number;
                construction_in_progress: number | null;
                leases: number;
                accumulated_depreciation: number;
                goodwill: number | null;
                investment_properties: number | null;
                financial_assets: number | null;
                intangible_assets: number | null;
                investments_and_advances: number;
                other_non_current_assets: number;
                total_non_current_assets: number;
            };
            total_assets: number;
        };
        liabilities: {
            current_liabilities: {
                accounts_payable: number;
                accrued_expenses: number | null;
                short_term_debt: number;
                deferred_revenue: number;
                tax_payable: number | null;
                pensions: number | null;
                other_current_liabilities: number;
                total_current_liabilities: number;
            };
            non_current_liabilities: {
                long_term_provisions: number | null;
                long_term_debt: number;
                provision_for_risks_and_charges: number;
                deferred_liabilities: number | null;
                derivative_product_liabilities: number | null;
                other_non_current_liabilities: number;
                total_non_current_liabilities: number;
            };
            total_liabilities: number;
        };
        shareholders_equity: {
            common_stock: number;
            retained_earnings: number;
            other_shareholders_equity: number;
            total_shareholders_equity: number;
            additional_paid_in_capital: number | null;
            treasury_stock: number | null;
            minority_interest: number | null;
        };
    }[];
}