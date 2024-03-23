/**
 * @jest-environment node
 */

import { TimeSeriesResponse } from "../types";

import {
    TwelveDataWrapper,
    TimeSeries,
} from "../index";

let twelveData = new TwelveDataWrapper(
    '41c2d05ca3404866813f89cabd600871',
);

test('TimeSeries', async () => {
    let tsRequest = new TimeSeries({
        interval: '30min',
        symbol: 'AAPL'
    });
    expect(await twelveData.get<TimeSeries>(tsRequest)).toBeInstanceOf(TimeSeriesResponse);
});