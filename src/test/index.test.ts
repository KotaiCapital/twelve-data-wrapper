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

test('Logo', async () => {
    let logoRequest: types.LogoRequest = {
        symbol: 'AAPL'
    };

    let logoResponse: types.LogoResponse = await twelveData.logo(logoRequest);

    console.log('Logo Response', logoResponse);

    //expect(logoResponse).toBeInstanceOf<types.LogoResponse>();
});