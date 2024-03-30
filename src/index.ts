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

    async call<Q, R>(query: TDMethod<Q, R>): Promise<R> {
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
    }

    async logo(param: apiInterfaces.LogoRequest): Promise<apiInterfaces.LogoResponse> {
        return this.call(new TDMethod<apiInterfaces.LogoRequest, apiInterfaces.LogoResponse>(param, endpoints.logo));
    }
}

export {
    apiInterfaces as types,
    TwelveDataWrapper,
};