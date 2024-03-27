import { StockRequestParameters, StockResponseMeta } from "../Utils";

export type StatisticsRequest = StockRequestParameters;

export interface StatisticsResponse {
    meta: StockResponseMeta;
    statistics: {
        valuations_metrics: {
            market_capitalization: number;
            enterprise_value: number;
            trailing_pe: number;
            peg_ratio: number;
            price_to_sales_ttm: number;
            price_to_book_mrq: number;
            enterprise_to_revenue: number;
            enterprise_to_ebitda: number;
        };
        financials: {
            fiscal_year_ends: number;
            most_recent_quarter: string;
            profit_margin: number;
            operating_margin: number;
            return_on_assets_ttm: number;
            return_on_equity_ttm: number;
            income_statement: {
                revenue_ttm: number;
                revenue_per_share_ttm: number;
                quarterly_revenue_growth: number;
                gross_profit_ttm: number;
                ebitda: number;
                net_income_to_common_ttm: number;
                diluted_eps_ttm: number;
                quarterly_earnings_growth_yoy: number;
            };
            balance_sheet: {
                revenue_ttm: number;
                total_cash_mrq: number;
                total_cash_per_share_mrq: number;
                total_debt_mrq: number;
                total_debt_to_equity_mrq: number;
                current_ratio_mrq: number;
                book_value_per_share_mrq: number;
            };
            cash_flow: {
                operating_cash_flow_ttm: number;
                levered_free_cash_flow_ttm: number;
            };
        };
        stock_stastistics: {
            shares_outstanding: number;
            float_shares: number;
            avg_10_volume: number;
            avg_90_volume: number;
            shares_short: number;
            short_ratio: number;
            short_percent_of_shares_outstanding: number;
            percent_held_by_insiders: number;
            percent_held_by_institutions: number;
        };
        stock_price_summary: {
            fifty_two_week_low: number;
            fifty_two_week_high: number;
            fifty_two_week_change: number;
            beta: number;
            day_50_ma: number;
            day_200_ma: number;
        };
        dividends_and_splits: {
            forward_annual_dividend_rate: number;
            forward_annual_dividend_yield: number;
            trailing_annual_dividend_rate: number;
            trailing_annual_dividend_yield: number;
            "5_year_average_dividend_yield": number;
            payout_ratio: number;
            dividend_date: string;
            ex_dividend_date: string;
            last_split_factor: string;
            last_split_date: string;
        };
    };
}