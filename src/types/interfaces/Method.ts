import { KVPString } from './Utils';

export class TDMethod<Q, R> {
    private _reqBody: Q;
    private _resBody: R | null;
    private _path: string;

    constructor(reqBody: Q, path: string){
        this._reqBody = reqBody;
        this._resBody = null;
        this._path = path;
    }

    requestBody(): Q {
        return this._reqBody;
    };

    responseBody(): R | null {
        return this._resBody;
    };

    setResponseBody(data: R): void {
        if (this._resBody){
            throw new Error('Response body already set');
        }

        this._resBody = data;
    };

    path(): string {
        return this._path;
    };
}

export class TDMethodWithPathParams<Q, R, P extends KVPString> extends TDMethod<Q, R> {
    private _pathParams: P;

    constructor(reqBody: Q, path: string, pathParams: P){
        super(reqBody, path);
        this._pathParams = pathParams;
    };
    
    pathParams(): P {
        return this._pathParams;
    };
}