// Input Interface (for both "all data" & "summary" API requests)
export interface MutualFundAPIRequest {
    symbol: string; // Required parameter: Symbol ticker of mutual fund
    country?: string; // Optional parameter: Filter by country name or alpha code
    dp?: number; // Optional parameter: Number of decimal places for floating values
}

// Output Interface
export interface MutualFundResponse {
    status: string;
    mutual_fund: {
        summary: {
            symbol: string;
            name: string;
            fund_family: string;
            fund_type: string;
            currency: string;
            share_class_inception_date: string;
            ytd_return: number;
            expense_ratio_net: number;
            yield: number;
            nav: number;
            min_investment: number;
            turnover_rate: number;
            net_assets: number;
            overview: string;
            people: { name: string; tenure_since: string }[];
        };
        performance: {
            trailing_returns: {
                period: string;
                share_class_return: number;
                category_return: number;
                rank_in_category: number;
            }[];
            annual_total_returns: {
                year: number;
                share_class_return: number;
                category_return: number | null;
            }[];
            quarterly_total_returns: {
                year: number;
                q1: number;
                q2: number;
                q3: number;
                q4: number;
            }[];
            load_adjusted_return: {
                period: string;
                return: number;
            }[];
        };
        risk: {
            volatility_measures: {
                period: string;
                alpha: number;
                alpha_category: number;
                beta: number;
                beta_category: number;
                mean_annual_return: number;
                mean_annual_return_category: number;
                r_squared: number;
                r_squared_category: number;
                std: number;
                std_category: number;
                sharpe_ratio: number;
                sharpe_ratio_category: number;
                treynor_ratio: number;
                treynor_ratio_category: number;
            }[];
            valuation_metrics: {
                price_to_earnings: number;
                price_to_earnings_category: number;
                price_to_book: number;
                price_to_book_category: number;
                price_to_sales: number;
                price_to_sales_category: number;
                price_to_cashflow: number;
                price_to_cashflow_category: number;
                median_market_capitalization: number;
                median_market_capitalization_category: number;
                three_year_earnings_growth: number;
                three_year_earnings_growths_category: number;
            };
        };
        ratings: {
            performance_rating: number;
            risk_rating: number;
            return_rating: number;
        };
        composition: {
            major_market_sectors: {
                sector: string;
                weight: number;
            }[];
            asset_allocation: {
                cash: number;
                stocks: number;
                preferred_stocks: number;
                convertables: number;
                bonds: number;
                others: number;
            };
            top_holdings: {
                symbol: string;
                name: string;
                weight: number;
            }[];
            bond_breakdown: {
                average_maturity: {
                    fund: number | null;
                    category: number | null;
                };
                average_duration: {
                    fund: number | null;
                    category: number;
                };
                credit_quality: {
                    grade: string;
                    weight: number;
                }[];
            };
        };
        purchase_info: {
            expenses: {
                expense_ratio_gross: number;
                expense_ratio_net: number;
            };
            minimums: {
                initial_investment: number;
                additional_investment: number;
                initial_ira_investment: number | null;
                additional_ira_investment: number | null;
            };
            pricing: {
                nav: number;
                twelve_month_low: number;
                twelve_month_high: number;
                last_month: number;
            };
            brokerages: string[];
        };
        sustainability: {
            score: number;
            corporate_esg_pillars: {
                environmental: number;
                social: number;
                governance: number;
            };
            sustainable_investment: boolean;
            corporate_aum: number;
        };
    };
}

// Interface for Summary API Response
export interface MutualFundSummaryResponse {
    mutual_fund: {
        summary: {
            symbol: string;
            name: string;
            fund_family: string;
            fund_type: string;
            currency: string;
            share_class_inception_date: string;
            ytd_return: number;
            expense_ratio_net: number;
            yield: number;
            nav: number;
            min_investment: number;
            turnover_rate: number;
            net_assets: number;
            overview: string;
            people: {
                name: string;
                tenure_since: string;
            }[];
        };
    };
    status: string;
}

// Interface for PerformanceHighDemand API Response
export interface MutualFundPerformanceResponse {
    mutual_fund: {
        performance: {
            trailing_returns: {
                period: string;
                share_class_return: number;
                category_return: number;
                rank_in_category: number;
            }[];
            annual_total_returns: {
                year: number;
                share_class_return: number;
                category_return: number | null;
            }[];
            quarterly_total_returns: {
                year: number;
                q1: number;
                q2: number;
                q3: number;
                q4: number;
            }[];
            load_adjusted_return: {
                period: string;
                return: number;
            }[];
        };
    };
    status: string;
}

// Interface for Risk API Response
export interface MutualFundRiskResponse {
    mutual_fund: {
        risk: {
            volatility_measures: {
                period: string;
                alpha: number;
                alpha_category: number;
                beta: number;
                beta_category: number;
                mean_annual_return: number;
                mean_annual_return_category: number;
                r_squared: number;
                r_squared_category: number;
                std: number;
                std_category: number;
                sharpe_ratio: number;
                sharpe_ratio_category: number;
                treynor_ratio: number;
                treynor_ratio_category: number;
            }[];
            valuation_metrics: {
                price_to_earnings: number;
                price_to_earnings_category: number;
                price_to_book: number;
                price_to_book_category: number;
                price_to_sales: number;
                price_to_sales_category: number;
                price_to_cashflow: number;
                price_to_cashflow_category: number;
                median_market_capitalization: number;
                median_market_capitalization_category: number;
                '3_year_earnings_growth': number;
                '3_year_earnings_growth_category': number;
            };
        };
    };
    status: string;
}

// Interface for Ratings API Response
export interface MutualFundRatingsResponse {
    mutual_fund: {
        ratings: {
            performance_rating: number;
            risk_rating: number;
            return_rating: number;
        };
    };
    status: string;
}

// Interface for CompositionHighDemand API Response
export interface MutualFundCompositionResponse {
    mutual_fund: {
        composition: {
            major_market_sectors: {
                sector: string;
                weight: number;
            }[];
            asset_allocation: {
                cash: number;
                stocks: number;
                preferred_stocks: number;
                convertables: number;
                bonds: number;
                others: number;
            };
            top_holdings: {
                symbol: string;
                name: string;
                weight: number;
            }[];
            bond_breakdown: {
                average_maturity: {
                    fund: number | null;
                    category: number | null;
                };
                average_duration: {
                    fund: number | null;
                    category: number;
                };
                credit_quality: {
                    grade: string;
                    weight: number;
                }[];
            };
        };
    };
    status: string;
}

export interface MutualFundPurchaseInfoResponse {
    mutual_fund: {
        purchase_info: {
            expenses: {
                expense_ratio_gross: number;
                expense_ratio_net: number;
            };
            minimums: {
                initial_investment: number;
                additional_investment: number;
                initial_ira_investment: number | null;
                additional_ira_investment: number | null;
            };
            pricing: {
                nav: number;
                "12_month_low": number;
                "12_month_high": number;
                last_month: number;
            };
            brokerages: string[];
        };
    };
    status: string;
}

export interface MutualFundSustainabilityResponse {
    mutual_fund: {
        sustainability: {
            score: number;
            corporate_esg_pillars: {
                environmental: number;
                social: number;
                governance: number;
            };
            sustainable_investment: boolean;
            corporate_aum: number;
        };
    };
    status: string;
}