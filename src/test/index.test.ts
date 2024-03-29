/**
 * @jest-environment node
 */

//import {mockDeep} from "jest-mock-extended";

import * as dotenv from "dotenv";

import * as interfaces from "../types/interfaces/";

import {
    types,
    TwelveDataWrapper,
} from "../";

dotenv.config();

let twelveData = new TwelveDataWrapper(
    process.env.TWELVEDATA_API_KEY,
);

/*test('TimeSeries', async () => {
    let tsRequest = new types.TimeSeries({
        interval: '30min',
        symbol: 'AAPL'
    });

    //let mockResponse = mockDeep<TimeSeriesResponse>();

    expect(await twelveData.call(tsRequest)).toBeInstanceOf(Object);
});*/

test('Logo', async () => {

    let logoRequest: interfaces.LogoRequest = {
        symbol: 'AAPL'
    };

    let logoResponse: interfaces.LogoResponse = await twelveData.logo(logoRequest);

    console.log('Logo Response', logoResponse);

    //expect(logoResponse).toBeInstanceOf<interfaces.LogoResponse>();
});