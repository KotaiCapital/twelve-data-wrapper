// Types are defined here for each endpoint available as per https://twelvedata.com/docs
// If it's on there, it's in here. At least it should be.
// I am debating whether I should have individual websocket types or just have an option to specify an option in a function to make it a websocket. 
// Or perhaps a wrapper function that you would call a function within.
// I guess I'll get there when I get there
// - CJ

declare module 'twelve-data-wrapper' {
    export class TwelveDataWrapper {
        constructor(key?: string, options?: Object);
        setConfig(options: Object): void;
        setApiKey(key: string): void;
        getUnformattedEndpoint(endpoint: string): Promise<JSON | unknown>;
        get(type: string, query: Object): Promise<Array<any>>;
        // stocks(parameters: StockRequest | AnyRequest): Promise<StockResponse | AnyResponse | unknown>
    }
}

declare global {
    ///////////////////////////////////////////////////
    //
    //          CLASSES
    //
    ///////////////////////////////////////////////////
    /*export class TDMethod<Q, R> {
        _reqBody: Q;
        _resBody: R;
        _path: string;
        constructor(reqBody: Q);
        requestBody(): Q;
        responseBody(): R;
        setResponseBody(data: R): void;
    }

    export class TDMethodyWithPathParams<Q, R, P extends KVP> extends TDMethod<Q, R> {
        _pathParams: P;
        constructor(reqBody: Q, pathParams: P);
        pathParams(): P;
    }

    export interface KVP {
        [k: string]: any;
    }*/

    ///////////////////////////////////////////////////
    //
    //          INTERFACES/TYPES
    //
    ///////////////////////////////////////////////////



}



export { }