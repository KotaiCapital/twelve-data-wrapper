/**
 * @jest-environment node
 */

//import {mockDeep} from "jest-mock-extended";

import * as dotenv from "dotenv";

import {
    types,
    TwelveDataWrapper,
} from "../";

dotenv.config();

let twelveData = new TwelveDataWrapper(
    process.env.TWELVEDATA_API_KEY,
);

/////////////////////////////
//Reference section
/////////////////////////////
test('StocksList', async () => {
    let stockListRequest: types.StockListRequest = {
        exchange: 'NYSE'
    };

    let stockListResponse: types.StockListResponse = await twelveData.stocksList(stockListRequest);

    if (Array.isArray(stockListResponse)) {
        console.log('Stocks retrieved from NYSE: ' + stockListResponse.length);
        console.log('First item in Stock List Response', stockListResponse[0]);
        expect(stockListResponse.length).toBeGreaterThan(0);
        let msciRecord = stockListResponse.find((stock) => stock.symbol === 'MSCI');

        expect(msciRecord).toBeDefined();
    } else {
        console.log('Stocks retrieved from NYSE: ' + stockListResponse.data.length);
        console.log('First item in Stock List Response', stockListResponse.data[0]);
    }
});

test('StocksList with plan', async () => {
    let stockListRequest: types.StockListRequest = {
        exchange: 'NYSE',
        show_plan: true
    };

    let stockListResponse: types.StockListResponse = await twelveData.stocksList(stockListRequest);

    if (Array.isArray(stockListResponse)) {
        console.log('Stocks retrieved from NYSE: ' + stockListResponse.length);
        console.log('First item in Stock List Response', stockListResponse[0]);
        expect(stockListResponse.length).toBeGreaterThan(0);
    } else {
        console.log('Stocks retrieved from NYSE: ' + stockListResponse.data.length);
        console.log('First item in Stock List Response', stockListResponse.data[0]);
        expect(stockListResponse.data.length).toBeGreaterThan(0);
    }
});

test('ForexPairsList', async () => {
    let forexPairsRequest: types.ForexPairsRequest = {};

    let forexPairsResponse: types.ForexPairsResponse = await twelveData.forexPairsList(forexPairsRequest);

    //console.log('Forex Pairs List Response length', forexPairsResponse.data.length);
    expect(forexPairsResponse.data.length).toBeGreaterThan(0);

    //expect(forexPairsListResponse).toBeInstanceOf(types.ForexPairsListResponse);
});

test('CyptocurrenciesList', async () => {
    let cryptocurrenciesRequest: types.CryptocurrenciesListRequest = {};

    let cryptocurrenciesResponse: types.CryptocurrenciesListResponse = await twelveData.cryptocurrenciesList(cryptocurrenciesRequest);

    console.log('Cryptocurrencies List Response length', cryptocurrenciesResponse.data.length);
    expect(cryptocurrenciesResponse.data.length).toBeGreaterThan(0);

    //expect(cryptocurrenciesListResponse).toBeInstanceOf(types.CryptocurrenciesListResponse);
});

test('ETFList', async () => {
    let etfListRequest: types.ETFListRequest = {};

    let etfListResponse: types.ETFListResponse = await twelveData.etfList(etfListRequest);

    if (Array.isArray(etfListResponse)) {
        console.log('ETF List Response length', etfListResponse.length);
        expect(etfListResponse.length).toBeGreaterThan(0);
    } else {

    }

    //expect(etfListResponse).toBeInstanceOf(types.ETFListResponse);
});

test('IndexList', async () => {
    let indicesListRequest: types.IndicesListRequest = {};

    let indicesListResponse: types.IndicesListResponse = await twelveData.indicesList(indicesListRequest);

    if (Array.isArray(indicesListResponse)) {
        console.log('Index List Response length', indicesListResponse.length);
        expect(indicesListResponse.length).toBeGreaterThan(0);
    }

    //expect(indexListResponse).toBeInstanceOf(types.IndexListResponse);
});

test('FundsList', async () => {
    let fundsListRequest: types.FundsListRequest = {};

    let fundsListResponse: types.FundsListResponse = await twelveData.fundsList(fundsListRequest);

    if (Array.isArray(fundsListResponse)) {
        console.log('Funds List Response length', fundsListResponse.length);
        expect(fundsListResponse.length).toBeGreaterThan(0);
    }

    //expect(fundsListResponse).toBeInstanceOf(types.FundsListResponse);
});

test('BondsList', async () => {
    let bondsListRequest: types.BondsListRequest = {};

    let bondsListResponse: types.BondsListResponse = await twelveData.bondsList(bondsListRequest);

    if (Array.isArray(bondsListResponse)) {
        console.log('Bonds List Response length', bondsListResponse.length);
        expect(bondsListResponse.length).toBeGreaterThan(0);
    }

    //expect(bondsListResponse).toBeInstanceOf(types.BondsListResponse);
});

test('ExchangesList', async () => {
    let exchangesRequest: types.ExchangesRequest = {
        type: 'Common Stock'
    };

    let exchangesResponse: types.ExchangesResponse = await twelveData.exchangesList(exchangesRequest);

    if (Array.isArray(exchangesResponse)) {
        console.log('Exchanges List Response length', exchangesResponse.length);
        expect(exchangesResponse.length).toBeGreaterThan(0);
    }

    //expect(exchangesListResponse).toBeInstanceOf(types.ExchangesListResponse);
});

test('CryptocurrencyExchangesList', async () => {
    let cryptoExchangesRequest: types.CryptocurrencyExchangesRequest = {};

    let cryptoExchangesResponse: types.CryptocurrencyExchangesResponse = await twelveData.cryptoExchangesList(cryptoExchangesRequest);

    console.log('Crypto Exchanges List Response length', cryptoExchangesResponse.data.length);
    expect(cryptoExchangesResponse.data.length).toBeGreaterThan(0);

    //expect(cryptoExchangesListResponse).toBeInstanceOf(types.CryptoExchangesListResponse);
});

test('TechnicalIndicatorsList', async () => {
    let tiRequest: types.TechnicalIndicatorsRequest = {};

    let tiResponse: types.TechnicalIndicatorsResponse = await twelveData.technicalIndicatorsList(tiRequest);

    console.log('Technical Indicators List Response length', Object.keys(tiResponse.data).length);
    expect(Object.keys(tiResponse.data).length).toBeGreaterThan(0);

    //expect(tiResponse).toBeInstanceOf(types.TechnicalIndicatorsListResponse);
});

test('SymbolSearch', async () => {
    let searchRequest: types.SymbolSearchRequest = {
        symbol: 'UBSG',
    };

    let searchResponse: types.SymbolSearchResponse = await twelveData.symbolSearch(searchRequest);

    console.log('Symbols Search Response length', searchResponse.data.length);
    expect(searchResponse.data.length).toBeGreaterThan(0);

    console.log('Symbols Search Response', searchResponse.data);

    //expect(searchResponse).toBeInstanceOf(types.SymbolsSearchResponse);
});

test('SymbolSearch with plan', async () => {
    let searchRequest: types.SymbolSearchRequest = {
        symbol: 'UBSG',
        show_plan: true
    };

    let searchResponse: types.SymbolSearchResponse = await twelveData.symbolSearch(searchRequest);

    console.log('Symbols Search Response length', searchResponse.data.length);
    expect(searchResponse.data.length).toBeGreaterThan(0);

    console.log('Symbols Search Response', searchResponse.data);

    /*if (typeof searchResponse.data[0].access !== 'undefined') {
        expect(searchResponse.data[0].access).toBeDefined();
    }*/

    //expect(searchResponse).toBeInstanceOf(types.SymbolsSearchResponse);
});

test('EarliestTimestamp', async () => {
    let etRequest: types.EarliestTimestampRequest = {
        symbol: 'AAPL',
        interval: '1day',
    };

    let etResponse: types.EarliestTimestampResponse = await twelveData.earliestTimestamp(etRequest);

    console.log('Earliest Timestamp Response', etResponse);

    //expect(etResponse).toBeInstanceOf(Object);
});

test('Market State', async () => {
    let msRequest: types.MarketStateRequest = {};

    let msResponse: types.MarketStateResponse = await twelveData.marketState(msRequest);

    console.log('Market State Response', msResponse);

    //expect(msResponse).toBeInstanceOf(Object);
});

/////////////////////////////
//Core section
/////////////////////////////
test('TimeSeries', async () => {
    let tsRequest: types.TimeSeriesRequest = {
        interval: '1min',
        symbol: 'AAPL',
        exchange: 'NASDAQ',
    };

    let tsResponse: types.TimeSeriesResponse = await twelveData.timeSeries(tsRequest);

    expect(tsResponse).toBeDefined();
    expect(tsResponse.meta).toBeDefined();
    expect(tsResponse.values).toBeDefined();
    expect(tsResponse.values.length).toBeGreaterThan(0);
    expect(tsResponse.status).toBeDefined();
});

test('ExchangeRate', async () => {
    let erRequest: types.ExchangeRateRequest = {
        symbol: 'EUR/USD',
    };

    let erResponse: types.ExchangeRateResponse = await twelveData.exchangeRate(erRequest);

    expect(erResponse).toBeDefined();
    expect(erResponse.symbol).toBeDefined();
    expect(erResponse.rate).toBeDefined();
    expect(erResponse.timestamp).toBeDefined();
});

test('CurrencyConversion', async () => {
    let ccRequest: types.CurrencyConversionRequest = {
        symbol: 'EUR/USD',
        amount: 100,
    };

    let ccResponse: types.CurrencyConversionResponse = await twelveData.currencyConversion(ccRequest);

    expect(ccResponse).toBeDefined();
    expect(ccResponse.symbol).toBeDefined();
    expect(ccResponse.rate).toBeDefined();
    expect(ccResponse.amount).toBeDefined();
    expect(ccResponse.timestamp).toBeDefined();
});

test('Quote', async () => {
    let quoteRequest: types.QuoteRequest = {
        symbol: 'AAPL',
    };

    let quoteResponse: types.QuoteResponse = await twelveData.quote(quoteRequest);

    expect(quoteResponse).toBeDefined();
    expect(quoteResponse.symbol).toBeDefined();
    expect(quoteResponse.name).toBeDefined();
    expect(quoteResponse.currency).toBeDefined();
    expect(quoteResponse.exchange).toBeDefined();
    expect(quoteResponse.mic_code).toBeDefined();
    expect(quoteResponse.open).toBeDefined();
    expect(quoteResponse.high).toBeDefined();
    expect(quoteResponse.low).toBeDefined();
    expect(quoteResponse.close).toBeDefined();
});

test('Real-Time Price', async () => {
    let rtpRequest: types.RealTimePriceRequest = {
        symbol: 'AAPL',
    };

    let rtpResponse: types.RealTimePriceResponse = await twelveData.realTimePrice(rtpRequest);

    expect(rtpResponse).toBeDefined();
    expect(rtpResponse.price).toBeDefined();
});

test('EndOfDayPrice', async () => {
    let eodRequest: types.EndOfDayPriceRequest = {
        symbol: 'AAPL',
    };

    let eodResponse: types.EndOfDayPriceResponse = await twelveData.endOfDayPrice(eodRequest);

    expect(eodResponse).toBeDefined();
    expect(eodResponse.symbol).toBeDefined();
    expect(eodResponse.exchange).toBeDefined();
    expect(eodResponse.mic_code).toBeDefined();
    expect(eodResponse.currency).toBeDefined();
    expect(eodResponse.datetime).toBeDefined();
    expect(eodResponse.timestamp).toBeDefined();
    expect(eodResponse.close).toBeDefined();
});

/*test('MarketMoversStocks', async () => {
    let mmRequest: types.MarketMoversRequest = {
        country: 'US',
        direction: 'gainers',
    };

    let mmResponse: types.MarketMoversResponse = await twelveData.marketMoversStocks(mmRequest);

    expect(mmResponse).toBeDefined();
    expect(mmResponse.exchange).toBeDefined();
    expect(mmResponse.mover_type).toBeDefined();
    expect(mmResponse.data).toBeDefined();
    expect(mmResponse.data.length).toBeGreaterThan(0);
});*/

/////////////////////////////
//Fundamentals section
/////////////////////////////
test('Logo', async () => {
    let logoRequest: types.LogoRequest = {
        symbol: 'AAPL'
    };

    let logoResponse: types.LogoResponse = await twelveData.logo(logoRequest);

    console.log('Logo Response', logoResponse);

    //expect(logoResponse).toBeInstanceOf<types.LogoResponse>();
});

test('CompanyProfile', async () => {
    let cpRequest: types.ProfileRequest = {
        symbol: 'AAPL'
    };

    let cpResponse: types.ProfileResponse = await twelveData.profile(cpRequest);

    console.log('Company Profile Response', cpResponse);

    //expect(cpResponse).toBeInstanceOf<types.CompanyProfileResponse>();
});

test('Dividends', async () => {
    let dividendsRequest: types.DividendsRequest = {
        symbol: 'AAPL'
    };

    let dividendsResponse: types.DividendsResponse = await twelveData.dividends(dividendsRequest);

    console.log('Dividends Response', dividendsResponse);

    //expect(dividendsResponse).toBeInstanceOf<types.DividendsResponse>();
});

test('Splits', async () => {
    let splitsRequest: types.SplitsRequest = {
        symbol: 'AAPL'
    };

    let splitsResponse: types.SplitsResponse = await twelveData.splits(splitsRequest);

    console.log('Splits Response', splitsResponse);

    //expect(splitsResponse).toBeInstanceOf<types.SplitsResponse>();
});

test('Earnings', async () => {
    let earningsRequest: types.EarningsRequest = {
        symbol: 'AAPL'
    };

    let earningsResponse: types.EarningsResponse = await twelveData.earnings(earningsRequest);

    console.log('Earnings Response', earningsResponse);

    //expect(earningsResponse).toBeInstanceOf<types.EarningsResponse>();
});

test('EarningsCalendar', async () => {
    let earningsCalendarRequest: types.EarningsCalendarRequest = {
        exchange: 'NASDAQ',
    };

    let earningsCalendarResponse: types.EarningsCalendarResponse = await twelveData.earningsCalendar(earningsCalendarRequest);

    console.log('Earnings Calendar Response', earningsCalendarResponse);

    //expect(earningsCalendarResponse).toBeInstanceOf<types.EarningsCalendarResponse>();
});

test('IPOCalendar', async () => {
    let ipoCalendarRequest: types.IPOCalendarRequest = {};

    let ipoCalendarResponse: types.IPOCalendarResponse = await twelveData.ipoCalendar(ipoCalendarRequest);

    console.log('IPO Calendar Response', ipoCalendarResponse);

    //expect(ipoCalendarResponse).toBeInstanceOf<types.IPOCalendarResponse>();
});

test('Statistics', async () => {
    let statsRequest: types.StatisticsRequest = {
        symbol: 'AAPL'
    };

    let statsResponse: types.StatisticsResponse = await twelveData.statistics(statsRequest);

    console.log('Statistics Response', statsResponse);

    //expect(statsResponse).toBeInstanceOf<types.StatisticsResponse>();
});

test('InsiderTransactions', async () => {
    let itRequest: types.InsiderTransactionsRequest = {
        symbol: 'AAPL'
    };

    let itResponse: types.InsiderTransactionsResponse = await twelveData.insiderTransactions(itRequest);

    console.log('Insider Transactions Response', itResponse);

    //expect(itResponse).toBeInstanceOf<types.InsiderTransactionsResponse>();
});

test('IncomeStatement', async () => {
    let isRequest: types.IncomeStatementRequest = {
        symbol: 'AAPL'
    };

    let isResponse: types.IncomeStatementResponse = await twelveData.incomeStatement(isRequest);

    console.log('Income Statement Response', isResponse);

    //expect(isResponse).toBeInstanceOf<types.IncomeStatementResponse>();
});

test('BalanceSheets', async () => {
    let bsRequest: types.BalanceSheetRequest = {
        symbol: 'AAPL'
    };

    let bsResponse: types.BalanceSheetResponse = await twelveData.balanceSheet(bsRequest);

    console.log('Balance Sheet Response', bsResponse);

    //expect(bsResponse).toBeInstanceOf<types.BalanceSheetsResponse>();
});

test('CashFlow', async () => {
    let cfRequest: types.CashFlowRequest = {
        symbol: 'AAPL'
    };

    let cfResponse: types.CashFlowResponse = await twelveData.cashFlow(cfRequest);

    console.log('Cash Flow Response', cfResponse);

    //expect(cfResponse).toBeInstanceOf<types.CashFlowResponse>();
});

test('OptionsExpiration', async () => {
    let oeRequest: types.OptionsExpirationRequest = {
        symbol: 'AAPL'
    };

    let oeResponse: types.OptionsExpirationResponse = await twelveData.optionsExpiration(oeRequest);

    console.log('Options Expiration Response', oeResponse);

    //expect(oeResponse).toBeInstanceOf<types.OptionsExpirationResponse>();
});

test('OptionsChain', async () => {
    let ocRequest: types.OptionsChainRequest = {
        symbol: 'AAPL',
    };

    let ocResponse: types.OptionsChainResponse = await twelveData.optionsChain(ocRequest);

    console.log('Options Chain Response', ocResponse);

    //expect(ocResponse).toBeInstanceOf<types.OptionsChainResponse>();
});

test('KeyExecutives', async () => {
    let keRequest: types.KeyExecutivesRequest = {
        symbol: 'AAPL'
    };

    let keResponse: types.KeyExecutivesResponse = await twelveData.keyExecutives(keRequest);

    console.log('Key Executives Response', keResponse);

    //expect(keResponse).toBeInstanceOf<types.KeyExecutivesResponse>();
});

test('InstitutionalHolders', async () => {
    let ihRequest: types.InstitutionalHoldersRequest = {
        symbol: 'AAPL'
    };

    let ihResponse: types.InstitutionalHoldersResponse = await twelveData.institutionalHolders(ihRequest);

    console.log('Institutional Holders Response', ihResponse);

    //expect(ihResponse).toBeInstanceOf<types.InstitutionalHoldersResponse>();
});

test('FundHolders', async () => {
    let fhRequest: types.FundHoldersRequest = {
        symbol: 'AAPL'
    };

    let fhResponse: types.FundHoldersResponse = await twelveData.fundHolders(fhRequest);

    console.log('Fund Holders Response', fhResponse);

    //expect(fhResponse).toBeInstanceOf<types.FundHoldersResponse>();
});

test('DirectHolders', async () => {
    let dhRequest: types.DirectHoldersRequest = {
        symbol: 'AAPL'
    };

    let dhResponse: types.DirectHoldersResponse = await twelveData.directHolders(dhRequest);

    console.log('Direct Holders Response', dhResponse);

    //expect(dhResponse).toBeInstanceOf<types.DirectHoldersResponse>();
});

//Last changes

/////////////////////////////
//Analysis section
/////////////////////////////
test('EarningsEstimate', async () => {
    let eeRequest: types.EarningsEstimateRequest = {
        symbol: 'AAPL'
    };

    let eeResponse: types.EarningsEstimateResponse = await twelveData.earningsEstimate(eeRequest);

    console.log('Earnings Estimate Response', eeResponse);

    //expect(eeResponse).toBeInstanceOf<types.EarningEstimatesResponse>();
});

test('RevenueEstimate', async () => {
    let reRequest: types.RevenueEstimateRequest = {
        symbol: 'AAPL'
    };

    let reResponse: types.RevenueEstimateResponse = await twelveData.revenueEstimate(reRequest);

    console.log('Revenue Estimate Response', reResponse);

    //expect(reResponse).toBeInstanceOf<types.RevenueEstimateResponse>();
});

test('EPSTrend', async () => {
    let etRequest: types.EPSTrendRequest = {
        symbol: 'AAPL'
    };

    let etResponse: types.EPSTrendResponse = await twelveData.epsTrend(etRequest);

    console.log('EPS Trend Response', etResponse);

    //expect(etResponse).toBeInstanceOf<types.EPSTrendResponse>();
});

test('EPSRevisions', async () => {
    let erRequest: types.EPSRevisionsRequest = {
        symbol: 'AAPL'
    };

    let erResponse: types.EPSRevisionsResponse = await twelveData.epsRevisions(erRequest);

    console.log('EPS Revisions Response', erResponse);

    //expect(erResponse).toBeInstanceOf<types.EPSRevisionsResponse>();
});

test('GrowthEstimates', async () => {
    let geRequest: types.GrowthEstimatesRequest = {
        symbol: 'AAPL'
    };

    let geResponse: types.GrowthEstimatesResponse = await twelveData.growthEstimates(geRequest);

    console.log('Growth Estimates Response', geResponse);

    //expect(geResponse).toBeInstanceOf<types.GrowthEstimatesResponse>();
});

test('Recommendations', async () => {
    let recRequest: types.RecommendationsRequest = {
        symbol: 'AAPL'
    };

    let recResponse: types.RecommendationsResponse = await twelveData.recommendations(recRequest);

    console.log('Recommendations Response', recResponse);

    //expect(recResponse).toBeInstanceOf<types.RecommendationsResponse>();
});

test('PriceTarget', async () => {
    let ptRequest: types.PriceTargetRequest = {
        symbol: 'AAPL'
    };

    let ptResponse: types.PriceTargetResponse = await twelveData.priceTarget(ptRequest);

    console.log('Price Target Response', ptResponse);

    //expect(ptResponse).toBeInstanceOf<types.PriceTargetResponse>();
});