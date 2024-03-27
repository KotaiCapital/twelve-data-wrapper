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


    interface InstitutionalHoldersResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        institutional_holders: InstitutionalHolder[];
    }

    interface InstitutionalHolder {
        entity_name: string;
        date_reported: string;
        shares: number;
        value: number;
        percent_held: number;
    }

    interface InstitutionalHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface InstitutionalHoldersResponse {
        meta: Meta;
        institutional_holders: Holder[];
    }

    interface Holder {
        entity_name: string;
        date_reported: string;
        shares: number;
        value: number;
        percent_held: number;
    }

    interface Meta {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
    }

    interface InstitutionalHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface FundHoldersResponse {
        meta: Meta;
        fund_holders: Holder[];
    }

    interface FundHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface DirectHoldersResponse {
        meta: Meta;
        direct_holders: Holder[];
    }

    interface DirectHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface EarningsEstimateResponse {
        earnings_estimate: EarningsEstimate[];
        status: string;
    }

    interface EarningsEstimate {
        date: string;
        period: string;
        number_of_analysts: number;
        avg_estimate: number;
        low_estimate: number;
        high_estimate: number;
        year_ago_eps: number;
    }

    interface EarningsEstimateRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface RevenueEstimateResponse {
        revenue_estimate: RevenueEstimate[];
        status: string;
    }

    interface RevenueEstimate {
        date: string;
        period: string;
        number_of_analysts: number;
        avg_estimate: number;
        low_estimate: number;
        high_estimate: number;
        year_ago_sales: number | null;
        sales_growth: number | null;
    }

    interface RevenueEstimateRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        dp?: number;
        
    }
    interface EPSTrendResponse {
        eps_trend: EPSTrend[];
        status: string;
    }

    interface EPSTrend {
        date: string;
        period: string;
        current_estimate: number;
        seven_days_ago: number;
        thirty_days_ago: number;
        sixty_days_ago: number;
        ninety_days_ago: number;
    }

    interface EPSTrendRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface EPSRevisionsResponse {
        eps_revision: EPSRevision[];
        status: string;
    }

    interface EPSRevision {
        date: string;
        period: string;
        up_last_week: number;
        up_last_month: number;
        down_last_week: number;
        down_last_month: number;
    }

    interface EPSRevisionsRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface GrowthEstimatesResponse {
        growth_estimates: GrowthEstimates;
        status: string;
    }

    interface GrowthEstimates {
        current_quarter: number;
        next_quarter: number;
        current_year: number;
        next_year: number;
        next_5_years_pa: number;
        past_5_years_pa: number;
    }

    interface GrowthEstimatesRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface RecommendationsResponse {
        trends: Trends;
        rating: number;
        status: string;
    }

    interface Trends {
        current_month: Recommendation;
        previous_month: Recommendation;
        [key: string]: Recommendation;
    }

    interface Recommendation {
        strong_buy: number;
        buy: number;
        hold: number;
        sell: number;
        strong_sell: number;
    }

    interface RecommendationsRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface PriceTargetResponse {
        price_target: PriceTarget;
        status: string;
    }

    interface PriceTarget {
        high: number;
        median: number;
        low: number;
        average: number;
        current: number;
    }

    interface PriceTargetRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface AnalystRatingsLightResponse {
        ratings: AnalystRatingLight[];
        status: string;
    }

    interface AnalystRatingLight {
        date: string;
        firm: string;
        rating_change: string;
        rating_current: string;
        rating_prior: string;
    }

    interface AnalystRatingsLightRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        rating_change?: string;
        outputsize?: number;
        
    }
    interface AnalystRatingsUSEquitiesResponse {
        ratings: AnalystRatingUSEquities[];
        status: string;
    }

    interface AnalystRatingUSEquities {
        date: string;
        firm: string;
        analyst_name: string;
        rating_change: string;
        rating_current: string;
        rating_prior: string;
        time: string;
        action_price_target: string;
        price_target_current: number;
        price_target_prior: number | null;
    }

    interface AnalystRatingsUSEquitiesRequest {
        symbol: string;
        exchange?: string;
        rating_change?: string;
        outputsize?: number;
        
    }

}



export { }