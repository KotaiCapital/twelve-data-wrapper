import builder from './util/URLHelper';
import endpoints from './util/endpoints';
import * as apiInterfaces from './types/interfaces';
import { KVPString } from './types/interfaces/Utils';
import { TDMethod, TDMethodWithPathParams } from './types/interfaces/Method';

class TwelveDataWrapper {
    api_key: string
    header_config?: Object
    baseURL: string
    baseWSURL: string

    constructor(key?: string, options?: {
        proxy?: string,
        wss_proxy?: string
    }) {
        this.baseURL = '';
        this.baseWSURL = 'wss://ws.twelvedata.com';
        // if(key) this.header_config = {'Authorization': `apikey ${key}`};
        this.api_key = key ?? '';
        // for CORS error prevention via proxy 
        if(!options) {
            this.baseURL = 'https://api.twelvedata.com';
            return
        }
        if(Object.hasOwn(options!, 'proxy')) {
            this.baseURL = options?.proxy as string;
            return
        }

    }

     /**
      * updates api key if not set by constructor.
      * @param {string} key
      */    
    setApiKey(key: string) {
        this.api_key = key || this.api_key;
    }
    // fallback function to hit whatever URL a user wants and not use a specific function  . Will lack the appropriate type
    async getUnformattedEndpoint(endpoint: string): Promise<Body> {
        try {
            const res = await fetch(endpoint, this.header_config)
            return res.json();
        } catch(e) {
            return(e) as Promise<Body>
        }
    }

    /*async get<T>(query: any):Promise<any | string> {
        if(!this.api_key) {
            console.log('Please define an api key');
            return 'Please define an api key'
        }
        let matchingEndpoint = Object.keys(ep)
            // @ts-ignore
            .filter(k => k === query.type())[0] as string;
        if(!matchingEndpoint) {
            throw new Error(`Cannot locate this endpoint.`);
        }
        // @ts-ignore
        const URL = `${this.baseURL}${ep[matchingEndpoint as keyof typeof ep]}/${builder(query.body() as any, this.api_key)}`;
        const res = await fetch(URL);
        // for whatever reason, fetch requires that you await the .json(), so this is how I'm managing that
        const output = await res.json();
        if(output.status !== "ok") throw new Error('Could not GET TwelveData resource');
        return {...output} as typeof query._type;
    }*/

    async callMethod<Q, R>(query: TDMethod<Q, R>): Promise<R> {
        if (!this.api_key) {
            console.log('Please define an api key');
            throw new Error('Please define an api key');
        }

        let matchingEndpoint = query.path();
        if (!matchingEndpoint) {
            throw new Error(`Cannot locate this endpoint.`);
        }

        const URL = `${this.baseURL}${matchingEndpoint}${builder(query.requestBody(), this.api_key)}`;
        const res = await fetch(URL);

        const output = await res.json();

        const castOutput =  output as R;
        query.setResponseBody(castOutput);
        return castOutput;
    }

    /*async callMethodWithPathParam<Q, R, P>(query: TDMethodWithPathParams<Q, R, P extends KVPString): Promise<R> {
        if (!this.api_key) {
            console.log('Please define an api key');
            throw new Error('Please define an api key');
        }

        let matchingEndpoint = query.path();
        if (!matchingEndpoint) {
            throw new Error(`Cannot locate this endpoint.`);
        }

        const URL = `${this.baseURL}${matchingEndpoint}${builder(query.requestBody(), this.api_key)}`;
        console.log(`URL: ${URL}`);
        const res = await fetch(URL);

        const output = await res.json();
        //if (output.status !== "ok") throw new Error('Could not GET TwelveData resource');

        const castOutput =  output as R;
        query.setResponseBody(castOutput);
        return castOutput;
    }*/

    /////////////////////////////
    //Reference section
    /////////////////////////////
    async stocksList(param: apiInterfaces.StockListRequest): Promise<apiInterfaces.StockListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.StockListRequest, apiInterfaces.StockListResponse>(param, endpoints.StockData));
    }

    async forexPairsList(param: apiInterfaces.ForexPairsRequest): Promise<apiInterfaces.ForexPairsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.ForexPairsRequest, apiInterfaces.ForexPairsResponse>(param, endpoints.forex_pairs));
    }

    async cryptoCurrenciesList(param: apiInterfaces.CryptocurrenciesListRequest): Promise<apiInterfaces.CryptocurrenciesListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.CryptocurrenciesListRequest, apiInterfaces.CryptocurrenciesListResponse>(param, endpoints.crypto));
    }

    async etfList(param: apiInterfaces.ETFListRequest): Promise<apiInterfaces.ETFListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.ETFListRequest, apiInterfaces.ETFListResponse>(param, endpoints.etf));
    }

    async indicesList(param: apiInterfaces.IndicesListRequest): Promise<apiInterfaces.IndicesListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.IndicesListRequest, apiInterfaces.IndicesListResponse>(param, endpoints.indices));
    }

    async fundsList(param: apiInterfaces.FundsListRequest): Promise<apiInterfaces.FundsListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.FundsListRequest, apiInterfaces.FundsListResponse>(param, endpoints.funds));
    }

    async bondsList(param: apiInterfaces.BondsListRequest): Promise<apiInterfaces.BondsListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.BondsListRequest, apiInterfaces.BondsListResponse>(param, endpoints.bonds));
    }

    async exchangesList(param: apiInterfaces.ExchangesRequest): Promise<apiInterfaces.ExchangesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.ExchangesRequest, apiInterfaces.ExchangesResponse>(param, endpoints.exchanges));
    }

    async cryptoExchangesList(param: apiInterfaces.CryptocurrencyExchangesRequest): Promise<apiInterfaces.CryptocurrencyExchangesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.CryptocurrencyExchangesRequest, apiInterfaces.CryptocurrencyExchangesResponse>(param, endpoints.crypto_exchanges));
    }

    async technicalIndicatorsList(param: apiInterfaces.TechnicalIndicatorsRequest): Promise<apiInterfaces.TechnicalIndicatorsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.TechnicalIndicatorsRequest, apiInterfaces.TechnicalIndicatorsResponse>(param, endpoints.technical_indicators));
    }

    async symbolSearch(param: apiInterfaces.SymbolSearchRequest): Promise<apiInterfaces.SymbolSearchResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.SymbolSearchRequest, apiInterfaces.SymbolSearchResponse>(param, endpoints.symbol_search));
    }

    async earliestTimestamp(param: apiInterfaces.EarliestTimestampRequest): Promise<apiInterfaces.EarliestTimestampResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EarliestTimestampRequest, apiInterfaces.EarliestTimestampResponse>(param, endpoints.earliest_timestamp));
    }

    async marketState(param: apiInterfaces.MarketStateRequest): Promise<apiInterfaces.MarketStateResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketStateRequest, apiInterfaces.MarketStateResponse>(param, endpoints.market_state));
    }

    /////////////////////////////
    //Core section
    /////////////////////////////

    async timeSeries(param: apiInterfaces.TimeSeriesRequest): Promise<apiInterfaces.TimeSeriesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.TimeSeriesRequest, apiInterfaces.TimeSeriesResponse>(param, endpoints.TimeSeriesRequest));
    }

    async exchangeRate(param: apiInterfaces.ExchangeRateRequest): Promise<apiInterfaces.ExchangeRateResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.ExchangeRateRequest, apiInterfaces.ExchangeRateResponse>(param, endpoints.exchange_rate));
    }

    async currencyConversion(param: apiInterfaces.CurrencyConversionRequest): Promise<apiInterfaces.CurrencyConversionResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.CurrencyConversionRequest, apiInterfaces.CurrencyConversionResponse>(param, endpoints.currency_conversion));
    }

    async quote(param: apiInterfaces.QuoteRequest): Promise<apiInterfaces.QuoteResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.QuoteRequest, apiInterfaces.QuoteResponse>(param, endpoints.quote));
    }

    async realTimePrice(param: apiInterfaces.RealTimePriceRequest): Promise<apiInterfaces.RealTimePriceResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.RealTimePriceRequest, apiInterfaces.RealTimePriceResponse>(param, endpoints.price));
    }

    async endOfDayPrice(param: apiInterfaces.EndOfDayPriceRequest): Promise<apiInterfaces.EndOfDayPriceResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EndOfDayPriceRequest, apiInterfaces.EndOfDayPriceResponse>(param, endpoints.eod));
    }

    async marketMoversStocks(param: apiInterfaces.MarketMoversRequest): Promise<apiInterfaces.MarketMoversResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketMoversRequest, apiInterfaces.MarketMoversResponse>(param, endpoints.mm_stocks));
    }

    async marketMoversETF(param: apiInterfaces.MarketMoversRequest): Promise<apiInterfaces.MarketMoversResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketMoversRequest, apiInterfaces.MarketMoversResponse>(param, endpoints.mm_etf));
    }

    async marketMoversMutualFunds(param: apiInterfaces.MarketMoversRequest): Promise<apiInterfaces.MarketMoversResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketMoversRequest, apiInterfaces.MarketMoversResponse>(param, endpoints.mm_mf));
    }

    async marketMoversForex(param: apiInterfaces.MarketMoversRequest): Promise<apiInterfaces.MarketMoversResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketMoversRequest, apiInterfaces.MarketMoversResponse>(param, endpoints.mm_forex));
    }

    async marketMoversCrypto(param: apiInterfaces.MarketMoversRequest): Promise<apiInterfaces.MarketMoversResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MarketMoversRequest, apiInterfaces.MarketMoversResponse>(param, endpoints.mm_crypto));
    }

    /////////////////////////////
    //Mutual funds section
    /////////////////////////////

    async mutualFundsList(param: apiInterfaces.MutualFundsListRequest): Promise<apiInterfaces.MutualFundsListResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundsListRequest, apiInterfaces.MutualFundsListResponse>(param, endpoints.mf_list));
    }

    async mutualFundsFamily(param: apiInterfaces.MutualFundsFamilyRequest): Promise<apiInterfaces.MutualFundsFamilyResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundsFamilyRequest, apiInterfaces.MutualFundsFamilyResponse>(param, endpoints.mf_family));
    }

    async mutualFundsType(param: apiInterfaces.MutualFundsTypeRequest): Promise<apiInterfaces.MutualFundsTypeResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundsTypeRequest, apiInterfaces.MutualFundsTypeResponse>(param, endpoints.mf_type));
    }

    async mutualFundsAllData(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundResponse>(param, endpoints.mfw));
    }

    async mutualFundsSummary(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundSummaryResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundSummaryResponse>(param, endpoints.mfw_summary));
    }

    async mutualFundsPerformance(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundPerformanceResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundPerformanceResponse>(param, endpoints.mfw_performance));
    }

    async mutualFundsRisk(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundRiskResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundRiskResponse>(param, endpoints.mfw_risk));
    }

    async mutualFundsRatings(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundRatingsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundRatingsResponse>(param, endpoints.mfw_ratings));
    }

    async mutualFundsComposition(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundCompositionResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundCompositionResponse>(param, endpoints.mfw_composition));
    }

    async mutualFundsPurchaseInfo(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundPurchaseInfoResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundPurchaseInfoResponse>(param, endpoints.mfw_purchase));
    }

    async mutualFundsSustainability(param: apiInterfaces.MutualFundAPIRequest): Promise<apiInterfaces.MutualFundSustainabilityResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.MutualFundAPIRequest, apiInterfaces.MutualFundSustainabilityResponse>(param, endpoints.mf_world_sust));
    }

    /////////////////////////////
    //Fundamentals section
    /////////////////////////////
    
    async logo(param: apiInterfaces.LogoRequest): Promise<apiInterfaces.LogoResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.LogoRequest, apiInterfaces.LogoResponse>(param, endpoints.logo));
    }

    async profile(param: apiInterfaces.ProfileRequest): Promise<apiInterfaces.ProfileResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.ProfileRequest, apiInterfaces.ProfileResponse>(param, endpoints.profile));
    }

    async dividends(param: apiInterfaces.DividendsRequest): Promise<apiInterfaces.DividendsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.DividendsRequest, apiInterfaces.DividendsResponse>(param, endpoints.dividends));
    }

    async splits(param: apiInterfaces.SplitsRequest): Promise<apiInterfaces.SplitsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.SplitsRequest, apiInterfaces.SplitsResponse>(param, endpoints.splits));
    }

    async earnings(param: apiInterfaces.EarningsRequest): Promise<apiInterfaces.EarningsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EarningsRequest, apiInterfaces.EarningsResponse>(param, endpoints.earnings));
    }

    async earningsCalendar(param: apiInterfaces.EarningsCalendarRequest): Promise<apiInterfaces.EarningsCalendarResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EarningsCalendarRequest, apiInterfaces.EarningsCalendarResponse>(param, endpoints.earnings_calendar));
    }

    async ipoCalendar(param: apiInterfaces.IPOCalendarRequest): Promise<apiInterfaces.IPOCalendarResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.IPOCalendarRequest, apiInterfaces.IPOCalendarResponse>(param, endpoints.ipo_calendar));
    }

    async statistics(param: apiInterfaces.StatisticsRequest): Promise<apiInterfaces.StatisticsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.StatisticsRequest, apiInterfaces.StatisticsResponse>(param, endpoints.statistics));
    }

    async insiderTransactions(param: apiInterfaces.InsiderTransactionsRequest): Promise<apiInterfaces.InsiderTransactionsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.InsiderTransactionsRequest, apiInterfaces.InsiderTransactionsResponse>(param, endpoints.insider_transactions));
    }

    async incomeStatement(param: apiInterfaces.IncomeStatementRequest): Promise<apiInterfaces.IncomeStatementResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.IncomeStatementRequest, apiInterfaces.IncomeStatementResponse>(param, endpoints.income_statement));
    }

    async balanceSheet(param: apiInterfaces.BalanceSheetRequest): Promise<apiInterfaces.BalanceSheetResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.BalanceSheetRequest, apiInterfaces.BalanceSheetResponse>(param, endpoints.balance_sheet));
    }

    async cashFlow(param: apiInterfaces.CashFlowRequest): Promise<apiInterfaces.CashFlowResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.CashFlowRequest, apiInterfaces.CashFlowResponse>(param, endpoints.cash_flow));
    }

    async optionsExpiration(param: apiInterfaces.OptionsExpirationRequest): Promise<apiInterfaces.OptionsExpirationResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.OptionsExpirationRequest, apiInterfaces.OptionsExpirationResponse>(param, endpoints.options_expiration));
    }

    async optionsChain(param: apiInterfaces.OptionsChainRequest): Promise<apiInterfaces.OptionsChainResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.OptionsChainRequest, apiInterfaces.OptionsChainResponse>(param, endpoints.options_chain));
    }

    async keyExecutives(param: apiInterfaces.KeyExecutivesRequest): Promise<apiInterfaces.KeyExecutivesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.KeyExecutivesRequest, apiInterfaces.KeyExecutivesResponse>(param, endpoints.key_executives));
    }

    async institutionalHolders(param: apiInterfaces.InstitutionalHoldersRequest): Promise<apiInterfaces.InstitutionalHoldersResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.InstitutionalHoldersRequest, apiInterfaces.InstitutionalHoldersResponse>(param, endpoints.institutional_holders));
    }

    async fundHolders(param: apiInterfaces.FundHoldersRequest): Promise<apiInterfaces.FundHoldersResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.FundHoldersRequest, apiInterfaces.FundHoldersResponse>(param, endpoints.fund_holders));
    }

    async directHolders(param: apiInterfaces.DirectHoldersRequest): Promise<apiInterfaces.DirectHoldersResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.DirectHoldersRequest, apiInterfaces.DirectHoldersResponse>(param, endpoints.direct_holders));
    }

    /*async lastChanges(param: apiInterfaces.LastChangesRequest): Promise<apiInterfaces.LastChangesResponse> {
        return this.callMethod(new TDMethodWithPathParams<apiInterfaces.LastChangesRequest, apiInterfaces.LastChangesResponse, {endpoint: string}>(param, endpoints.last_changes));
    }*/

    /////////////////////////////
    //Analysis section
    /////////////////////////////

    async earningsEstimate(param: apiInterfaces.EarningsEstimateRequest): Promise<apiInterfaces.EarningsEstimateResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EarningsEstimateRequest, apiInterfaces.EarningsEstimateResponse>(param, endpoints.earnings_estimate));
    }

    async revenueEstimate(param: apiInterfaces.RevenueEstimateRequest): Promise<apiInterfaces.RevenueEstimateResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.RevenueEstimateRequest, apiInterfaces.RevenueEstimateResponse>(param, endpoints.revenue_estimate));
    }

    async epsTrend(param: apiInterfaces.EPSTrendRequest): Promise<apiInterfaces.EPSTrendResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EPSTrendRequest, apiInterfaces.EPSTrendResponse>(param, endpoints.eps_trend));
    }

    async epsRevisions(param: apiInterfaces.EPSRevisionsRequest): Promise<apiInterfaces.EPSRevisionsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.EPSRevisionsRequest, apiInterfaces.EPSRevisionsResponse>(param, endpoints.eps_revisions));
    }

    async growthEstimates(param: apiInterfaces.GrowthEstimatesRequest): Promise<apiInterfaces.GrowthEstimatesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.GrowthEstimatesRequest, apiInterfaces.GrowthEstimatesResponse>(param, endpoints.growth_estimates));
    }

    async recommendations(param: apiInterfaces.RecommendationsRequest): Promise<apiInterfaces.RecommendationsResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.RecommendationsRequest, apiInterfaces.RecommendationsResponse>(param, endpoints.recommendations));
    }

    async priceTarget(param: apiInterfaces.PriceTargetRequest): Promise<apiInterfaces.PriceTargetResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.PriceTargetRequest, apiInterfaces.PriceTargetResponse>(param, endpoints.price_target));
    }

    async analystRatingsLight(param: apiInterfaces.AnalystRatingsLightRequest): Promise<apiInterfaces.AnalystRatingsLightResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.AnalystRatingsLightRequest, apiInterfaces.AnalystRatingsLightResponse>(param, endpoints.ar_light));
    }

    async analystRatingsUSEquities(param: apiInterfaces.AnalystRatingsUSEquitiesRequest): Promise<apiInterfaces.AnalystRatingsUSEquitiesResponse> {
        return this.callMethod(new TDMethod<apiInterfaces.AnalystRatingsUSEquitiesRequest, apiInterfaces.AnalystRatingsUSEquitiesResponse>(param, endpoints.ar_us_equities));
    }

    /////////////////////////////
    //Websockets section
    /////////////////////////////
}

export {
    apiInterfaces as types,
    TwelveDataWrapper,
};