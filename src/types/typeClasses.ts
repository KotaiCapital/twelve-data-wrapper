//import { TDQuery } from './';

// testing out commonly used endpoints because it will be a grueling task to do all of them. Might cheat n use chatgpt :)
export class StockData {
    body: StockData;
    type: string;
    constructor(data: StockData) {
        this.type = 'StockData';
        this.body = data
    }
}

export class TimeSeries extends TDMethod<TimeSeriesRequest, TimeSeriesResponse> {

}

export {
    TimeSeriesRequest,
    TimeSeriesResponse
}
